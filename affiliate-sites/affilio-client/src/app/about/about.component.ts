import { NewsletterSignupComponent } from "../newsletter-signup/newsletter-signup.component";
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterLink, FontAwesomeModule, NewsletterSignupComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
