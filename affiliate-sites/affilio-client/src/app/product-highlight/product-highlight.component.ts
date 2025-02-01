import { Component, HostListener, OnInit } from '@angular/core';
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
  featuredProducts = [
    {
      title: 'Rabbit Hay Feeder',
      subtitle: 'Keep your rabbit’s hay neat and tidy',
      image: '../assets/rabbit-background.png',
      description: 'A durable hay feeder designed for rabbits.',
      price: '$25.99',
      lastModified: new Date(2024, 10, 20), // Example date
      link: '/product/rabbit-hay-feeder'
    },
    {
      title: 'Deluxe Rabbit Hutch',
      subtitle: 'A cozy and secure home for your rabbit',
      image: '../assets/rabbit-background.png',
      description: 'Spacious, weatherproof hutch for your pet.',
      price: '$199.99',
      lastModified: new Date(2024, 10, 18), // Example date
      link: '/product/deluxe-rabbit-hutch'
    },
    {
      title: 'Rabbit Water Bottle',
      subtitle: 'Stay hydrated all day',
      image: '../assets/rabbit-background.png',
      description: 'Leak-proof water bottle for rabbits.',
      price: '$14.99',
      lastModified: new Date(2024, 10, 22), // Example date
      link: '/product/rabbit-water-bottle'
    }
  ];

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
      this.gridCols = '1fr 1fr'; // Two columns
    } else {
      this.gridCols = '1fr 1fr 1fr'; // Three columns
    }
  }

  navigateToProduct(link: string): void {
    console.log('Navigating to:', link);
    // Add routing or navigation logic here
  }

  navigateToAllProducts(): void {
    console.log('Navigating to all products');
    // Add navigation to all products page here
  }
}
