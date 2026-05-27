import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'logbook',
    loadComponent: () => import('./features/logbook/logbook-list/logbook-list.component').then(m => m.LogbookListComponent),
  },
  {
    path: 'logbook/new',
    loadComponent: () => import('./features/logbook/logbook-form/logbook-form.component').then(m => m.LogbookFormComponent),
  },
  {
    path: 'logbook/:id/edit',
    loadComponent: () => import('./features/logbook/logbook-form/logbook-form.component').then(m => m.LogbookFormComponent),
  },
  {
    path: 'logbook/:id',
    loadComponent: () => import('./features/logbook/logbook-detail/logbook-detail.component').then(m => m.LogbookDetailComponent),
  },
  {
    path: 'weather',
    loadComponent: () => import('./features/weather/weather.component').then(m => m.WeatherComponent),
  },
  {
    path: 'map',
    loadComponent: () => import('./features/map/map.component').then(m => m.MapComponent),
  },
  {
    path: 'trips',
    loadComponent: () => import('./features/trips/trips.component').then(m => m.TripsComponent),
  },
  { path: '**', redirectTo: '' },
];
