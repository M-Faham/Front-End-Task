import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'weather',
        pathMatch: 'full',
      },
      {
        path: 'weather',
        loadChildren: () => import('./weather/weather.module')
          .then(m => m.WeatherModule),
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
