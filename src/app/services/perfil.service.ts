import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { login } from '../models/login';
import { BdService } from './bd.service';
import { Router} from '@angular/router';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})

export class PerfilService {
  constructor(private router:Router,private bdservice: BdService,private authService: AuthService) { }
  
  status = false;
  usuarios : Perfil [] = [];
  usuarioServicio:Perfil;
  valido : boolean = false;

  public user: SocialUser;
  public loggedIn: boolean;

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
  signOut(): void {
    this.authService.signOut();
    this.status = false;
   
    
  }

  verificacion(){
    if (this.status === true){
        this.status = true;
      }
      else{
        this.loggedIn = (this.user != null);
        this.status = this.loggedIn;
        console.log(this.status);
      }
  }

  identificacionCuenta(){
    let estado:string;
    if(this.usuarioServicio != null){estado='interno';}
    if(this.user !=null){estado='facebook'}
    return estado;
  }

  inicioSesion(){
    this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (this.user != null);
    });
    if(this.loggedIn == true){
    this.status = this.loggedIn;
    }
  }

  setUsuarios(usuariox:Perfil[]){
    this.usuarios = usuariox;
  }

  obtenerUsuarios(){
    return this.bdservice.cargarPersonas();
  }

  onValidacionPersona(persona1:login){
      console.log("el nick es: "+persona1.usuario+"\nla contraseña es:"+persona1.contrasena);
  }

  onValidacion(persona2:login){
      this.usuarios.forEach(element => {
          if(element.usuario === persona2.usuario){
              if(element.contrasena === persona2.contrasena){
                  this.usuarioServicio = element;
                  this.status = true;
                  
              }
          }else{
              console.log("error");   
          } 
      });
  }

  onValidacionid(id){
    this.usuarios.forEach(element => {
        if(element.identificacion === id){
                this.valido = false;
        }else{
            this.valido = true;
            console.log("el id es valido");  
        }   
    });
  } 

  onAgregar(usuario1:Perfil){
    if(this.usuarios == null){
        this.usuarios = [];
    }
    this.usuarios.push(usuario1);
    this.bdservice.guardarUsuario(this.usuarios);
  
  }

  posicionamiento(usuarioPos){
      console.log("el nombre que entra en el posicionamiento es: "+usuarioPos.nombre);
      console.log("entra");
      let contador =0;
      this.usuarios.forEach(element => {
          if(element.usuario===usuarioPos.nick){
              console.log("el posicionamiento es"+contador);
              return contador;
          }
          contador++;
      });
      return contador;
  }

  navegar(){
    if(this.status){
        return true;
    }
    else{
        return false;
    }
    }
}  


