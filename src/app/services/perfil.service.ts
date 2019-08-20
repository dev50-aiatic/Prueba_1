import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { login } from '../models/login';



@Injectable({
  providedIn: 'root'
})
export class PerfilService {



  constructor() { }
  status :boolean =false;
  usuarios : Perfil [] = [/* new usuario("sandro","latam", '2019-01-16',"12345",1202212), 
  new usuario("ivan","latam1", "2019-01-16","12345",110123) */];
  usuarioServicio:Perfil;
  
  /* @Output() estadocomp = new EventEmitter<boolean>(); */

  onValidacionPersona(persona1:login){
      console.log("el nick es: "+persona1.usuario+"\nla contraseña es:"+persona1.contraseña);
  }
  onValidacion(persona2:login){
      this.usuarios.forEach(element => {
          if(element.usuario === persona2.usuario){
              if(element.contraseña === persona2.contraseña){
                  this.usuarioServicio = element;
                  this.status = true;
              }
          }else{
              console.log("error");
              
          }
          
      });
  }
  onAgregar(usuario1:Perfil){
      this.usuarios.push(usuario1);
  }
  onModificar(usuarioMod:Perfil){
      let indice = this.posicionamiento(Perfil);
      console.log("el indice es"+indice);
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
}

 
  


