import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewAuthGuard, NewAuthGuardd } from './new-auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = 
[
  {
    path:"",
    component:HomeComponent,
    canActivate:[NewAuthGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    canActivate:[NewAuthGuardd]

  },

  {
    path:"sign-up",
    component:SignUpComponent,
    canActivate:[NewAuthGuardd]

  },
  {
    path:"employe",
    component:ProductListComponent,
    canActivate:[NewAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
