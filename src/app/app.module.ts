import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import  {environment} from '../environments/environment';

import { LoginComponent } from './components/perfiles/login/login.component';
import { RegistroComponent } from './components/perfiles/registro/registro.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { PerfilComponent } from './components/perfiles/perfil/perfil.component';
import { AuthGuard } from './guard/auth.guard';
import {PerfilService} from './services/perfil.service';
import { HttpClientModule} from '@angular/common/http';
import { BdService } from './services/bd.service';

const routes : Routes =  [
 
  { path: 'perfil', component:PerfilComponent,},
  { path: 'registro', component: RegistroComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'perfiles', component: PerfilesComponent},
  { path: '', component: LoginComponent}
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    PerfilesComponent,
    PerfilComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    InicioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

    
   
    
    
  ],
  providers: [
    AngularFirestore,
    AngularFireAuth,
    BdService,
    PerfilService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
