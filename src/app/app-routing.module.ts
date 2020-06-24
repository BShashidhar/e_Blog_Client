import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserChangePasswordComponent } from './user/user-change-password/user-change-password.component';
import { UGuardService } from './services/u-guard.service';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "home", component: UserLoginComponent, canActivate: [UGuardService], data: {role: "User"} },
    { path: "create", component: UserRegisterComponent },
    { path: "login", component: UserLoginComponent },
    { path: "changepassword", component: UserChangePasswordComponent, canActivate: [UGuardService], data: {role: "User"}  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

