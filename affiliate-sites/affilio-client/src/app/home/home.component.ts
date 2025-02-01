import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { FeaturedBlogPostsComponent } from "../featured-blog-posts/featured-blog-posts.component";
import { ProductHighlightComponent } from "../product-highlight/product-highlight.component";
import { HomeCopyComponent } from "./home-copy/home-copy.component";
import { NewsletterSignupComponent } from "../newsletter-signup/newsletter-signup.component";
import { SocialActivityComponent } from "./social-activity/social-activity.component";
import { WeSupportComponent } from "./we-support/we-support.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturedBlogPostsComponent, ProductHighlightComponent, HomeCopyComponent, NewsletterSignupComponent, SocialActivityComponent, WeSupportComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
