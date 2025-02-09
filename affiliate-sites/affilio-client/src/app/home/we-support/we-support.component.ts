import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-we-support',
  standalone: true,
  templateUrl: './we-support.component.html',
  styleUrls: ['./we-support.component.scss'],
  imports: [CommonModule, MatButtonModule, MatCardModule],
})
export class WeSupportComponent implements OnInit {
  @Input() data: any ;
  gridCols: string = '1fr';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustGridCols(event.target.innerWidth);
  }

  ngOnInit() {
    this.adjustGridCols(window.innerWidth);
  }


  navigateToSupport(link: string): void {
    window.open(link, '_blank');
  }


  adjustGridCols(width: number) {
    if (width <= 768) {
      this.gridCols = '1fr'; // Single column
    } else if (width <= 1200) {
      this.gridCols = ' 1fr'; // Two columns
    } else {
      this.gridCols = '1fr 1fr 1fr'; // Three columns
    }
  }
}
