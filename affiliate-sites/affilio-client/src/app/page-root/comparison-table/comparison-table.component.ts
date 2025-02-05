import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CtaButtonComponent } from "../../cta-button/cta-button.component";
import { StarRatingsComponent } from "../star-ratings/star-ratings.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-comparison-table',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, CtaButtonComponent, StarRatingsComponent, MatCardModule],
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss'],
})
export class ComparisonTableComponent implements OnInit {
  @Input() metadata: any;
  @Input() affiliateProducts: any[] = [];


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
}
