import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import MatProgressSpinnerModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NewsletterSubscriptionService } from '../services/newsletter-subscription.service';

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
    MatProgressSpinnerModule, // Add MatProgressSpinnerModule here
    FormsModule, // Add FormsModule here
  ]
})
export class NewsletterSignupComponent {

  constructor( private service: NewsletterSubscriptionService) {}

@Input() metadata: any;


  email: string = ''; // Explicitly typed as a string
  isSubmitted: boolean = false;
  isInvalidEmail: boolean = false;
  isLoading: boolean = false;
  errorSubscribing: boolean = false;
  succesfullySubscribed: boolean = false;
  alreadySubscribed: boolean = false;

  subscribeToNewsletter(): void {
    // Basic email validation
    if (!this.email || !this.isValidEmail(this.email)) {
      this.isInvalidEmail = true;
      return;
    }

    // Reset flags before submission
    this.isInvalidEmail = false;
    this.isSubmitted = true;
    this.isLoading = true;
    this.errorSubscribing = false;
    this.succesfullySubscribed = false;
    this.alreadySubscribed = false;

    // Make the API call
    this.service.subscribeToNewsletter(this.email).subscribe({
      next: (response) => {
        if (response?.message === 'Subscription already exists') {
          this.alreadySubscribed = true;
        } else {
          this.succesfullySubscribed = true;
        }
      },
      error: (err) => {
        console.error('Subscription error:', err);
        this.errorSubscribing = true;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  resetAlreadySubscribed(): void {
    if (this.alreadySubscribed) {
      this.alreadySubscribed = false;
      this.succesfullySubscribed = false;
      this.errorSubscribing = false;
    }
  }

  // Simple email validation
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
}
