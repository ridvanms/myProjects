import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'user',
    loadChildren : () => import('./account/account.module').then((m) => m.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
