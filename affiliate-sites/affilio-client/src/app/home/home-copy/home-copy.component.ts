import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CtaButtonComponent } from '../../cta-button/cta-button.component';

@Component({
  selector: 'app-home-copy',
  standalone: true,
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './home-copy.component.html',
  styleUrl: './home-copy.component.scss'
})
export class HomeCopyComponent implements OnInit {
  @Input() metadata: any ;
  @Input() componentId: string = '';


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

