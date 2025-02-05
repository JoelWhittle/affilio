import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { StarRatingsComponent } from "../star-ratings/star-ratings.component";
import { CtaButtonComponent } from '../../cta-button/cta-button.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-reccomendation',
  standalone: true,
  imports: [StarRatingsComponent, CtaButtonComponent, CommonModule, MatCardModule],
  templateUrl: './product-reccomendation.component.html',
  styleUrl: './product-reccomendation.component.scss'
})
export class ProductReccomendationComponent {
  @Input() metadata: any = null;
  @Input() affiliateProduct: any = null;
  @Input() isFinal: boolean = false;

constructor(private sanitizer: DomSanitizer){}
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
