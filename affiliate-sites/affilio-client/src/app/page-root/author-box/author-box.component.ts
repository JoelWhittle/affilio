import { Component, Input } from '@angular/core';
import { CtaButtonComponent } from "../../cta-button/cta-button.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-author-box',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule , CtaButtonComponent// Add FormsModule here
  ] , templateUrl: './author-box.component.html',
  styleUrl: './author-box.component.scss'
})
export class AuthorBoxComponent {
@Input() item: any;
}
