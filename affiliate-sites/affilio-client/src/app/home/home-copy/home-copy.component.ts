import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CtaButtonComponent } from '../../cta-button/cta-button.component';

@Component({
  selector: 'app-home-copy',
  standalone: true,
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './home-copy.component.html',
  styleUrl: './home-copy.component.scss'
})
export class HomeCopyComponent {
  @Input() metadata: any ;
  @Input() componentId: string = '';

}
