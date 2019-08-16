import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/perfiles/login/login.component';
import { RegistroComponent } from './components/perfiles/registro/registro.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { PerfilComponent } from './components/perfiles/perfil/perfil.component';


const routes : Routes =  [
 
  { path: 'perfil', component:PerfilComponent},
  { path: 'registro', component: RegistroComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'perfiles', component: PerfilesComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
