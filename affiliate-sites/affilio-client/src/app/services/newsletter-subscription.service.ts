import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TenantService } from './tenant.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsletterSubscriptionService {



    private readonly apiUrl = `${environment.apiBaseUrl}/newsletter-subscription`;
    constructor(private http: HttpClient,  private tenantService: TenantService) {}

    subscribeToNewsletter(email: string): Observable<any> {
      const apiUrl = this.apiUrl;
      const tenant = this.tenantService.tenant().id;
      const payload = { email, tenant };

      // Return the HTTP Observable instead of subscribing inside the service
      return this.http.post<any>(`${apiUrl}`, payload);
    }

}
