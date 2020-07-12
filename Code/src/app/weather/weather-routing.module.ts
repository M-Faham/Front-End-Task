import { CityComponent } from './city/city.component';
import { WeatherComponent } from './weather.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WeatherComponent
      },
      {
        path: ':code',
        component: CityComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }

export const components = [
  WeatherComponent,
  CityComponent
];
