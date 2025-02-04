import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-newsletter-signup',
  standalone: true,
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule // Add FormsModule here
  ]
})
export class NewsletterSignupComponent {

@Input() title: string = 'Subscribe to Our Newsletter';
  @Input() subtitle: string = 'Stay up to date with the latest blog posts, featured products';

  email: string = ''; // Explicitly typed as a string
  isSubmitted: boolean = false;
  isInvalidEmail: boolean = false;

  // Form submission logic
  subscribeToNewsletter(): void {
    // Basic email validation
    if (!this.email || !this.isValidEmail(this.email)) {
      this.isInvalidEmail = true;
      return;
    }

    this.isInvalidEmail = false;
    this.isSubmitted = true;

    // Handle subscription logic here (e.g., sending to a service)
    alert(`Thank you for subscribing with email: ${this.email}`);
  }

  // Simple email validation
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
}
