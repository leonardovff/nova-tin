import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule)
  },
  { path: '**', redirectTo: 'cars'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
