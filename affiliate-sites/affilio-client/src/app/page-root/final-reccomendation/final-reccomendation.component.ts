import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductHighlightComponent } from "../../product-highlight/product-highlight.component";
import { ProductReccomendationComponent } from "../product-reccomendation/product-reccomendation.component";

@Component({
  selector: 'app-final-reccomendation',
  standalone: true,
  imports: [ProductReccomendationComponent],
  templateUrl: './final-reccomendation.component.html',
  styleUrl: './final-reccomendation.component.scss'
})
export class FinalReccomendationComponent  {

  @Input() metadata: any = null;
  @Input() affiliateProduct: any = null;
  @Input() isFinal: boolean = false;

}
