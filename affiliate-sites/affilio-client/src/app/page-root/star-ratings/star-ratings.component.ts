import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star-ratings',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './star-ratings.component.html',
  styleUrl: './star-ratings.component.scss'
})
export class StarRatingsComponent {

  @Input() starRatings: any = null;
  // Helper function to convert starRatings object to an array of key-value pairs
  getRatings(starRatings: { [key: string]: number }) {
    return Object.entries(starRatings).map(([key, value]) => ({ key, value }));
  }
}
