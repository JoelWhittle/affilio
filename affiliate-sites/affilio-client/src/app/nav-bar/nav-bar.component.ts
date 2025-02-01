import { Component, HostListener, OnInit } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { TenantService } from '../services/tenant.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
     RouterModule,
  ],
   templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  tenant: any | null = null;

  showMenu = false;
  constructor(private tenantService: TenantService) {}


  ngOnInit(): void {
    this.tenant = this.tenantService.tenant;

  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.navbar')) {
      this.closeMenu();
    }
  }

}
