import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfountComponent } from './notfount/notfount.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'user',
    loadChildren : () => import('./account/account.module').then((m) => m.AccountModule)
  },
  {
    path:"**",
    component:NotfountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
