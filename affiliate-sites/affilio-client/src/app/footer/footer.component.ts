import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TenantService } from '../services/tenant.service';

  @Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, FontAwesomeModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  tenant ;
constructor( private tenantService: TenantService) {
  this.tenant = this.tenantService.tenant;

}

}
