import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CtaButtonComponent } from "../cta-button/cta-button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, CtaButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundImage: string = '';  // Default image path
  @Input() lastModified: string | null = null;  // Default image path
  @Input() componentId: string = '';
  @Input() author: any = null;  // Default image path

  @Input() ctas: any = [];
}
