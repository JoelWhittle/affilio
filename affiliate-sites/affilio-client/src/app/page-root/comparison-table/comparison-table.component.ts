import { Component, Input } from '@angular/core';
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
export class ComparisonTableComponent {
  @Input() metadata: any;
  @Input() affiliateProducts: any[] = [];

}
