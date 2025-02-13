import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TenantService {

    tenant = signal<any | null>(null);
    loading = signal<boolean>(false);
    error = signal<string | null>(null);
    private readonly apiUrl = `${environment.apiBaseUrl}/tenants`;
    constructor(private http: HttpClient) {}


    fetchTenantByApiKey(apiKey: string): void {
      const apiUrl = `${environment.apiBaseUrl}/tenant/by-api-key/${apiKey}`;

        this.http.get<any>(`${apiUrl}`).subscribe({
          next: (data: any) => {
            console.log("heere")
            console.log(data);
            this.tenant.set(data);
            this.loading.set(false);
          },
          error: (err: any) => {
            console.log(err);

            this.error.set(err.message || 'Failed to fetch tenant');
            this.loading.set(false);
          },
        });
      }

}
