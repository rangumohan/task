import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authGuard.service';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: "signup", component: SignUpComponent },
  { path: "user", component: UserComponent,canActivate:[AuthGuard]},
  { path: "login", component: SignInComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
