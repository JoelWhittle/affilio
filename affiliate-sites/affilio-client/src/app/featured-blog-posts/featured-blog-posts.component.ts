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

 @Input() data: any = null ;
  @Input() dynamicData: any = null;


  // featuredPosts = [
  //   {
  //     title: 'How to Care for Your Rabbit',
  //     subtitle: 'Tips and tricks for new rabbit owners',
  //     image: '../assets/rabbit-background.png',
  //     excerpt: 'Learn the basics of keeping your bunny healthy and happy...',
  //     link: '/post/how-to-care-for-your-rabbit',
  //     lastModified: new Date(2024, 10, 20) // Example date
  //   },
  //   {
  //     title: 'Best Rabbit Toys in 2024',
  //     subtitle: 'Find the perfect toy for your furry friend',
  //     image: '../assets/rabbit-background.png',
  //     excerpt: 'Check out our curated list of top rabbit toys...',
  //     link: '/post/best-rabbit-toys-2024',
  //     lastModified: new Date(2024, 10, 18) // Example date
  //   },
  //   {
  //     title: 'Rabbit Diet 101',
  //     subtitle: 'What your rabbit should eat for optimal health',
  //     image: '../assets/rabbit-background.png',
  //     excerpt: 'Discover the best foods for your rabbit...',
  //     link: '/post/rabbit-diet-101',
  //     lastModified: new Date(2024, 10, 15) // Example date
  //   }
  // ];

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
