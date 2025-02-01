import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { environment } from '../environments/environment';  // Import the environment file
import { TenantService } from './services/tenant.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatCardModule, FooterComponent, NavBarComponent, HttpClientModule  // Add HttpClientModule here
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

 tenant;
loading;
error;
title = 'affilio-client';
constructor(private http: HttpClient, private tenantService: TenantService) {

  this.tenant = this.tenantService.tenant;
  this.loading = this.tenantService.loading;
  this.error = this.tenantService.error;

  }




  ngOnInit(): void {
    console.log('API Key:', environment.apiKey);
    console.log("MAKING IT HERE");

    const apiKey = environment.apiKey;

   var res =  this.tenantService.fetchTenantByApiKey(apiKey);
   this.title = this.tenant() ? this.tenant().name : '';  // Update title with tenant's name

    console.log(res);

  }



}
