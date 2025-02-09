import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-highlight',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './product-highlight.component.html',
  styleUrls: ['./product-highlight.component.scss']
})
export class ProductHighlightComponent implements OnInit {
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
      this.gridCols = '1fr';
    } else {
      this.gridCols = '1fr 1fr 1fr';
    }
  }

  navigateToProduct(link: string): void {
    console.log('Navigating to:', link);
  }

  navigateToAllProducts(): void {
    console.log('Navigating to all products');
  }
}
