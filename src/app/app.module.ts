import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';

import { RouterModule, Routes } from '@angular/router';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';

import  {environment} from '../environments/environment';



import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { PerfilComponent } from './components/perfiles/perfil/perfil.component';


import {PerfilService} from './services/perfil.service';
import { ListaperfilesComponent } from './components/perfiles/listaperfiles/listaperfiles.component';



const routes : Routes =  [
  { path: 'contacto', component: ContactoComponent},
  { path: 'footer', component: FooterComponent},
  { path: '', component: FooterComponent},
  { path: 'perfil', component:PerfilComponent},
  { path: 'listaperfiles', component:ListaperfilesComponent}
  
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ContactoComponent,
    PerfilesComponent,
    PerfilComponent,
    ListaperfilesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireStorageModule,
    ReactiveFormsModule
   
    
    
  ],
  providers: [
    PerfilService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
