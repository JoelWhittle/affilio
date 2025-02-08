import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import pageData from '../../assets/dummy-page-data.json';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from "../hero/hero.component";
import { TextSectionComponent } from "./text-section/text-section.component";
import { ComparisonTableComponent } from "./comparison-table/comparison-table.component";
import { ProductReccomendationComponent } from "./product-reccomendation/product-reccomendation.component";
import { FinalReccomendationComponent } from "./final-reccomendation/final-reccomendation.component"; // Import FormsModule
import { AuthorBoxComponent } from './author-box/author-box.component';
import { PageService } from '../services/page.service';
import { TenantService } from '../services/tenant.service';
import { environment } from '../../environments/environment';
import { NewsletterSignupComponent } from '../newsletter-signup/newsletter-signup.component';
import { FeaturedBlogPostsComponent } from "../featured-blog-posts/featured-blog-posts.component";
import { ProductHighlightComponent } from "../product-highlight/product-highlight.component";
import { HomeCopyComponent } from "../home/home-copy/home-copy.component";
import { SocialActivityComponent } from "../home/social-activity/social-activity.component";
import { WeSupportComponent } from "../home/we-support/we-support.component";

@Component({
  selector: 'app-page-root',
  templateUrl: './page-root.component.html',
  styleUrls: ['./page-root.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule // Add FormsModule here
    ,
    HeroComponent,
    TextSectionComponent,
    ComparisonTableComponent,
    ProductReccomendationComponent,
    FinalReccomendationComponent,
    AuthorBoxComponent,
    NewsletterSignupComponent,
    FeaturedBlogPostsComponent,
    ProductHighlightComponent,
    HomeCopyComponent,
    SocialActivityComponent,
    WeSupportComponent,
    FinalReccomendationComponent
],
})
export class PageRootComponent implements OnInit {
  pageContent: any;
  v2: boolean = false;
  slug: string | null = null;
  constructor(private route: ActivatedRoute, private pageService: PageService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    // Subscribe to route URL changes
    this.route.url.subscribe((segments) => {
      // Join all URL segments into a single slug
      this.slug = segments.map(segment => segment.path).join('/') || null;

      console.log('Full Slug:', this.slug);

      // Load the page data for the current slug
      this.loadPageData();
    });
  }
  // ngOnInit(): void {
  //   this.route.url.subscribe(() => {
  //     // Get the full path, excluding query parameters
  //     const fullPath = this.route.snapshot.url.map(segment => segment.path).join('/');
  //     this.slug = fullPath || null;
  //     console.log(this.slug);

  //     this.loadPageData(); // Load the new page data
  //   });
  // }


  async loadPageData(){
    const test = await this.pageService.fetchPage( environment.apiKey, this.slug );
        this.pageContent = test;
        this.v2 = true;
        console.log("content");
        console.log(this.pageContent);

  }

  getDynamicData(component: any): any {
    return this.pageContent.dynamicData.find((data: any) => data.componentId === component.id)?.data ;
  }
}
