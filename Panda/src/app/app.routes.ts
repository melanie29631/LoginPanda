import { Routes } from '@angular/router';
import path from 'path';
import { Login } from './page/login/login';
import { Dashboard } from './page/dashboard/dashboard';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
