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

import { PerfilService} from './services/perfil.service';
import { HttpClientModule} from '@angular/common/http';
import { BdService } from './services/bd.service';
import { TareasComponent } from './components/tareas/tareas.component';
import { AuthGuard } from './guard/auth.guard';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("20148850796-209l8tpdp87cfqr4mqrg66909inc0bkn.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2461863594044970")
  }
]);
  export function provideConfig() {
  return config;
}
 


const routes : Routes =  [
  { path: '', component: LoginComponent},
  { path: 'perfil', component:PerfilComponent, canActivate:[AuthGuard]},
  { path: 'registro', component: RegistroComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'inicio', component: InicioComponent, canActivate:[AuthGuard]},
  { path: 'perfiles', component: PerfilesComponent,canActivate:[AuthGuard]},
  { path: 'tareas', component: TareasComponent, canActivate:[AuthGuard]}
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
    TareasComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SocialLoginModule,
   

  
  ],
  providers: [
    AngularFirestore,
    BdService,
    PerfilService,
    AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
    

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
