/* eslint-disable prettier/prettier */

import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.module';
import { UserService } from '../user/user/user.service'; // Import UserService
import { CreatePageDto } from './dtos/create-page-dto';
import { Prisma } from '@prisma/client';
import { TenantService } from '../tenant/tenant.service';
import { GetPageDto } from './dtos/get-page-dto';

@Injectable()
export class PageService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService, // Inject UserService
    private readonly tenantService: TenantService, // Inject TenantService
  ) {}

  // Helper method to validate if user and tenant exist
  private async validateUserAndTenant(userId: string, tenantId: string) {
    // Check if the user exists
    const user = await this.userService.getUserById(userId); // Assuming this method exists in UserService
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    // Check if the tenant exists
    const tenant = await this.tenantService.getTenantByApiKey(tenantId); // Assuming this method exists in TenantService
    if (!tenant) {
      throw new NotFoundException(`Tenant with ID ${tenantId} not found.`);
    }

    // Optionally, you can add additional checks, like making sure the user owns the tenant
    // If this is the case, check that the user is associated with the tenant, if applicable.
    if (tenant.createdBy !== userId) {
      throw new ForbiddenException('User does not have permission to create a page for this tenant.');
    }

    return tenant.id;
  }

  async createPage(createPageDto: CreatePageDto) {
    const { slug, published, createdBy, seoTitle, seoDescription, seoKeywords, metadata, tenantId } = createPageDto;

    // Validate user and tenant existence
   const tenant = await this.validateUserAndTenant(createdBy, tenantId);

    // Create the page data
    const pageData: Prisma.PageCreateInput = {
      slug,
      published,
      seoTitle,
      seoDescription,
      seoKeywords,
      metadata,
      tenant: {
        connect: { id: tenant }, // Link to tenant by tenantId
      },
      createdByUser: {
        connect: { id: createdBy }, // Connect the createdByUser relation to the user
      },
    };
    // Create the page in the database
    const page = await this.prisma.page.create({
      data: pageData,
    });

    return page;
  }


  async getPage(getPageDto: GetPageDto) {
    const { slug, apiKey } = getPageDto;
  
    // Find the tenant by API key
    const tenant = await this.prisma.tenant.findUnique({
      where: { apiKey },
    });
  
    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }
  
    // Find the page by slug and tenantId, including components, affiliate products, and their media
    const page = await this.prisma.page.findFirst({
      where: {
        slug,
        tenantId: tenant.id,
      },
      include: {
        components: {
          include: {
            media: true, // Include media for components
            affiliateProducts: {
              include: {
                media: true, // Include media for affiliate products
              },
            },
          },
          orderBy: {
            order: 'asc', // Order components by 'order' field in ascending order
          },
        },
      },
    });
  
    if (!page) {
      throw new NotFoundException('Page not found');
    }
  
    // Find the blog post associated with the page, if any
    const blogPost = await this.prisma.blogPost.findFirst({
      where: {
        pageId: page.id, // Match the page ID
      },
      include: {
        author: {
          include: {
            media: true, // Include media for the author
          },
        },
        media: true, // Include media for the blog post
      },
    });
  
const dynamicData: { componentId: string; data: any }[] = [];

for (const component of page.components) {
  if (component.type == 'FEATURED-BLOGS') {
    const posts = await this.prisma.blogPost.findMany({
      where: {
        tenantId: tenant.id,
      },
      include: {
        author: {
          include: {
            media: true,
          },
        },
        media: true,
        page: true
      },
    });
    console.log(posts);
    const data: any = [];
     let count = 0;
    for (const post of posts) {
       if (post.id !== blogPost?.id) {
      data.push(post);
       count++;
    }
    if (count === 3) break;
     }

    dynamicData.push({
      componentId: component.id,
      data: data,
    });
  }
}


    return {
      ...page,
      blogPost: blogPost || null, 
      dynamicData: dynamicData
    };
  }
  
  
  
  }
  


