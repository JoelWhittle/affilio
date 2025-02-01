import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-social-activity',
  standalone: true,
  templateUrl: './social-activity.component.html',
  styleUrls: ['./social-activity.component.scss'],
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterLink, FontAwesomeModule],
})
export class SocialActivityComponent {
  @Input() metadata: any ;

  socialPosts = [
    {
      title: 'New Rabbit Care Tips',
      excerpt: 'Check out our latest tips on how to care for your rabbit in winter...',
      date: new Date('2024-11-26T12:00:00'),
      link: 'https://twitter.com/rabbithaven/status/1234567890',
      thumbnail: '../assets/rabbit-background.png',
    },
    {
      title: 'How to Set Up a Rabbit-Friendly Home',
      excerpt: 'Creating a rabbit-friendly environment is essential. Here are the best ways to set up your home...',
      date: new Date('2024-11-24T14:00:00'),
      link: 'https://facebook.com/rabbithaven/posts/9876543210',
      thumbnail: '../assets/rabbit-background.png',
    },
    {
      title: 'Bunny Adventures: Exploring the Outdoors',
      excerpt: 'We took our bunnies on a little adventure. Check out these adorable moments!',
      date: new Date('2024-11-22T10:00:00'),
      link: 'https://instagram.com/rabbithaven/p/abcdef12345',
      thumbnail: '../assets/rabbit-background.png',
    },
  ];

  getPlatformName(url: string): string {
    if (url.includes('twitter')) return 'Twitter';
    if (url.includes('facebook')) return 'Facebook';
    if (url.includes('instagram')) return 'Instagram';
    return 'Social Media';
  }
  getPlatformIcon(url: string): string {
    if (url.includes('twitter')) return 'fab fa-twitter'; // Twitter icon
    if (url.includes('facebook')) return 'fab fa-facebook-f'; // Facebook icon
    if (url.includes('instagram')) return 'fab fa-instagram'; // Instagram icon

    return 'fab fa-globe'; // Default icon (e.g., globe or other)
  }


  navigateToPost(link: string): void {
    window.open(link, '_blank');
  }
}
