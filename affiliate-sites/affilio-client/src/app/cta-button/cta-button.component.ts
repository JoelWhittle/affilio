import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  @Input() text: string = '';
  @Input() accent: boolean = false;
  @Input() identifier: string = '';  // Default image path
  @Input() targetUrl: string = '';  // Default image path
  @Input() source: string = '';  // Default image path
  @Input() variant: boolean = false;

  constructor(private router: Router) {}

  click() {


    if (this.targetUrl) {
      if (this.targetUrl.startsWith('http://') || this.targetUrl.startsWith('https://')) {
        window.location.href = this.targetUrl; // External link
      } else {
        this.router.navigateByUrl(this.targetUrl); // Internal route
      }
    }}
}
