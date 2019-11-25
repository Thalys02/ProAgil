import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PalestranteComponent } from './palestrante/palestrante.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatosComponent } from './contatos/contatos.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  {path:'user',component:UserComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'registration',component:RegistrationComponent}
  ]},
  {path:'eventos',component: EventosComponent},
  {path:'palestrantes',component: PalestranteComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'contatos',component: ContatosComponent},
  {path:'',redirectTo: 'dashboard', pathMatch:'full'},
  {path:'**',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
