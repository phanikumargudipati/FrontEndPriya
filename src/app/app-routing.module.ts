import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmpsComponent } from './emps/emps.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
{path:"register",component:RegisterComponent},
{path:"login",component:LoginComponent},
{path:"emps",component:EmpsComponent,canActivate:[authGuard]},
{path:"",component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
