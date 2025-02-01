import { Component, Input } from '@angular/core';
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
export class WeSupportComponent {
  @Input() metadata: any ;

  supportItems = [
    {
      name: 'Rabbit Rescue Foundation',
      description: 'Dedicated to finding abandoned rabbits loving homes.',
      logo: '../assets/rabbit-background.png',
      link: 'https://rabbitrescue.org',
    },
    {
      name: 'Bunny Wellness Initiative',
      description: 'Promoting health and wellness for rabbits through education.',
      logo: '../assets/rabbit-background.png',
      link: 'https://bunnywellness.com',
    },
    {
      name: 'Adopt-A-Bunny',
      description: 'Helping connect families with bunnies in need of homes.',
      logo: '../assets/rabbit-background.png',
      link: 'https://adoptabunny.org',
    },
  ];

  navigateToSupport(link: string): void {
    window.open(link, '_blank');
  }
}
