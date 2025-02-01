/* eslint-disable prettier/prettier */

import {  Post, Body, Controller, Get} from '@nestjs/common';
import { PageService } from './page.service';
import { CreatePageDto } from './dtos/create-page-dto';
import { GetPageDto } from './dtos/get-page-dto';


@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}


  // @Get('create-dummy')
  // async test() {
  //   // Create a dummy CreatePageDto
  //   const createPageDto: CreatePageDto = {
  //     slug: 'dummy-slug',
  //     published: true,
  //     seoKeywords: ['keyword1', 'keyword2'],
  //     tenantId: 'd6968f47-e9c4-4d1c-b232-b00db0dbfd0b', // Use a valid tenant ID here
  //     createdBy: 'f1cabdcb-68b3-4c39-97aa-db612709c9ef', // Use a valid user ID here
  //   };

  //   // Call the PageService to create the page
  //   const page = await this.pageService.createPage(createPageDto);

  //   return page;  // Return the created page
  // }

    // POST endpoint to create a page
    @Post()
    async createPage(@Body() createPageDto: CreatePageDto) {
      return this.pageService.createPage(createPageDto);
    }

    @Post('fetch')
    async getPage(@Body() getPageDto: GetPageDto) {
      return this.pageService.getPage(getPageDto);
    }


}
