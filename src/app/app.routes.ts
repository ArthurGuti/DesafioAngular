import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'terms-of-use',
        loadComponent: () => import('./pages/terms-of-use/terms-of-use.component').then((c) => c.TermsOfUseComponent)
    },
    {
        path: 'privacy-policy',
        loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then((c) => c.PrivacyPolicyComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.NotFoundComponent)
    }
];
