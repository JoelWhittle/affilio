import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  errorMessage: string;


  constructor(private router: Router) {
    const messages = [
      "Uh-oh, this bunny hopped the wrong way!",
      "Looks like we’re lost in the warren!",
      "This page is as hard to find as a carrot in a haystack!",
      "Our bunny's map might be upside down... Let’s try again!",
      "Oops! This burrow leads nowhere.",
      "The bunny searched, but no luck finding that page!",
      "Lost? Don’t worry, let’s hop back to safety!",
      "This trail went cold—time to turn around!",
      "No carrots here, just an empty burrow.",
      "Whoops! Even bunnies get lost sometimes."
    ];

    // Randomly select a message
    this.errorMessage = messages[Math.floor(Math.random() * messages.length)];
  }

}
