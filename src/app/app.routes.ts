import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { RegistrationPage } from './registration-page/registration-page';

export const routes: Routes = [
    {
        path: '',
        component: RegistrationPage,
        title: 'Home',
        pathMatch: 'full',
    }, 
    {
        path:'registration',
        component: RegistrationPage,
        title: 'Registration',
    },
    {
        path: '**',
        redirectTo: 'registration',
    }
];
