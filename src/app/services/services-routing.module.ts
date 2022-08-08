import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolver } from '../core/resolvers/home.resolver';
import { TrafficResolver } from '../core/resolvers/traffic.resolver';
import { WeatherResolver } from '../core/resolvers/weather.resolver';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: 'list',
        component: ServicesListComponent,
        resolve: {
          data: HomeResolver,
        },
      },
      {
        path: 'weather',
        loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
        data: {
          breadcrumb: 'Clima',
        },
        resolve: {
          data: WeatherResolver,
        },
      },
      {
        path: 'traffic',
        loadChildren: () => import('./traffic/traffic.module').then(m => m.TrafficModule),
        data: {
          breadcrumb: 'Trânsito',
        },
        resolve: {
          data: TrafficResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
