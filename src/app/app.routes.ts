import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'fr', component: AppComponent },
  { path: 'en', component: AppComponent },
  { path: '**', component: PageNotFoundComponent },
];
