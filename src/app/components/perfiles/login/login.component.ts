import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { login } from 'src/app/models/login';
import { PerfilService } from '../../../services/perfil.service';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { AuthService } from "angularx-social-login";

import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild ("nick",{static:false}) nickInput:ElementRef;
  @ViewChild ("contraseña",{static:false}) contraseña:ElementRef;
  @Output() estado = false;

  
  public user: {};
  public loggedIn: boolean;
  
  constructor(private perfilogin:PerfilService,private router:Router,private authService: AuthService,public _auth: AuthService) { }
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  
    this.perfilogin.obtenerUsuarios().subscribe((Perfil:Perfil[])=>{this.perfilogin.setUsuarios(Perfil)});
  }
  onValidarDatos(){
    let persona1 = new login(this.nickInput.nativeElement.value,this.contraseña.nativeElement.value);
    this.perfilogin.onValidacionPersona(persona1);
    this.perfilogin.onValidacion(persona1);
    this.estado = this.perfilogin.status;
    console.log("el estado del status es: "+this.perfilogin.status);
    if(this.estado===true){
      console.log("atino");
      this.router.navigate(['inicio']);
    }else{
      this.router.navigate(['/login']);
      alert("usuario o contraseña invalido");
    }
  }
  signInWithFB(): void {
    this.perfilogin.signInWithFB();
    this.estado = this.perfilogin.status;
    if(this.estado===true){
      console.log("atino");
      this.router.navigate(['inicio']);
      console.log(this.estado);
    }else{
      this.router.navigate(['/login']);
      alert("usuario invalido");
      console.log(this.estado);
    }
  }

  signOut(): void {
    this.perfilogin.signOut();
  }
  
}

