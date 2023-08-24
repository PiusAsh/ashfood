import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterationComponent } from './Authentication/registeration/registeration.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [{
  path: 'login', component: LoginComponent
},
{
  path: "register", component: RegisterationComponent
},
{
  path: "search/:searchTerm", component: HomeComponent
},
{
  path: "", component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
