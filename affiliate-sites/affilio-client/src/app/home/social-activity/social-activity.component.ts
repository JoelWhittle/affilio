import { Component, HostListener, Input, OnInit } from '@angular/core';
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
export class SocialActivityComponent implements OnInit {

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
      this.gridCols = '1fr'; // Single column
    } else if (width <= 1200) {
      this.gridCols = '1fr'; // Two columns
    } else {
      this.gridCols = '1fr 1fr 1fr'; // Three columns
    }
  }

  @Input() data: any ;

  getPlatformName(platform: string): string {
    if (platform.toLowerCase().includes('twitter')) return 'Twitter';
    if (platform.toLowerCase().includes('facebook')) return 'Facebook';
    if (platform.toLowerCase().includes('instagram')) return 'Instagram';
    return 'Social Media';
  }
  getPlatformIcon(platform: string): string {
    if (platform.toLowerCase().includes('twitter')) return 'fab fa-twitter';
    if (platform.toLowerCase().includes('facebook')) return 'fab fa-facebook-f';
    if (platform.toLowerCase().includes('instagram')) return 'fab fa-instagram';

    return 'fab fa-globe'; // Default icon (e.g., globe or other)
  }


  navigateToPost(link: string): void {
    window.open(link, '_blank');
  }
}
