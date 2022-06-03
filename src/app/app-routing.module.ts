import { GetAllNoteComponent } from './component/get-all-note/get-all-note.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { AuthguardnameGuard } from './authguardname.guard';


const routes: Routes = [
  {path:'' ,redirectTo:"/login" ,pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'resetPassword/:token',component:ResetPasswordComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'homePage',component: HomePageComponent,canActivate:[AuthguardnameGuard],
    children:[{path:'getAllNotes',component:GetAllNoteComponent}]},
  // {path:'homePage',component:HomePageComponent,canActivate:[AuthguardnameGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
