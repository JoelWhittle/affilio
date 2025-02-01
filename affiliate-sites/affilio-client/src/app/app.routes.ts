import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageRootComponent } from './page-root/page-root.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: PageRootComponent },
  { path: '404', component: NotFoundComponent },

  { path: '**', component: PageRootComponent },
];
