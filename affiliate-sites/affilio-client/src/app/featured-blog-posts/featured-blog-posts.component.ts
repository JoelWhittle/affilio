import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-blog-posts',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './featured-blog-posts.component.html',
  styleUrls: ['./featured-blog-posts.component.scss']
})
export class FeaturedBlogPostsComponent implements OnInit {

 @Input() data: any  ;

  gridCols: string = '1fr';

  ngOnInit() {
    this.adjustGridCols(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustGridCols(event.target.innerWidth);
  }

  adjustGridCols(width: number) {
    if (width <= 768) {
      this.gridCols = '1fr';
    } else if (width <= 1200) {
      this.gridCols = ' 1fr';
    } else {
      this.gridCols = '1fr 1fr 1fr';
    }
  }

  navigateToPost(link: string): void {
    console.log('Navigating to:', link);
    // Add routing or navigation logic here
  }

  navigateToAllPosts(): void {
    console.log('Navigating to all blog posts...');
    // Replace this with your actual navigation logic
    window.location.href = '/blog';
  }
}
