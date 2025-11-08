import { Routes } from '@angular/router';
import { HomePage, AboutPage } from '../pages';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
];
