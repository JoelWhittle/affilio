import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PageService {


    private readonly apiUrl = `${environment.apiBaseUrl}/page`;
    constructor(private http: HttpClient, private router: Router) {}

    fetchPage(apiKey: string | null, slug: string | null): any {
      console.log("Fetching page with the following details:");
      console.log("API Key:", apiKey);
      console.log("Slug:", slug);

      const payload = { apiKey, slug };

      return this.http.post<any>(this.apiUrl + '/fetch', payload).toPromise()
        .then(response => {
          console.log("Response received:", response);
          return response;
        })
        .catch(error => {
          console.error("Error fetching page:", error);
          if (error.status === 404) {
            console.log("Page not found (404), navigating to 404 page.");
            this.router.navigate(['/404']);
          } else {
            console.log("An unexpected error occurred, handling it.");
            this.router.navigate(['/error']);
          }
        });


    }


}
