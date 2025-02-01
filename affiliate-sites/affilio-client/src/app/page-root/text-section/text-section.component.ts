import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CtaButtonComponent } from "../../cta-button/cta-button.component";


export interface CTA {
  text: string;
  accent: boolean;
  identifier: string;
  targetUrl: string;
  source: string;
}

export interface Paragraph {
  text: string;
  image?: {
    src: string;
    altText: string;
    imagePosition: string;  // 'left', 'right', or 'below'
    caption: string;
  };
  ctas?: CTA[];  // Array of CTA objects
}

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.scss'
})

export class TextSectionComponent {
  @Input() metadata: any = null;  // Default image path

  constructor(private sanitizer: DomSanitizer) {}

  // Sanitize each paragraph's text content
  get sanitizedParagraphs(): SafeHtml[] {
    return this.metadata.paragraphs.map((paragraph: { text: string; })  => this.sanitizer.bypassSecurityTrustHtml(paragraph.text));
  }
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
