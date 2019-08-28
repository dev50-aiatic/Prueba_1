import { Component, OnInit, ElementRef, ViewChild, Input, Output } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  //Verificacion de Login
  @Output() valido = false;

  //Estado de conexión
  estado = false;

  //Almacenamiento de usuario
  usuarios:Perfil[] = [];
  
  //Variables para usuario con login local
  nombre:string;
  nick:string;
  nacimiento:Date;
  contrasena:string;
  identificacion:number;
  usuarioPerfil:Perfil;
  
  //Variables para usuarios con SocialLogil
  
  url:string;
  nombrers:string;
  correo:string;
  tipoCuenta:boolean;

  constructor(private registroServices:PerfilService, private router: Router) { }

  ngOnInit() {
    
    //Inicializacion de arreglo con usuarios existentes
    this.registroServices.obtenerUsuarios().subscribe((Perfil:Perfil[])=>{this.registroServices.setUsuarios(Perfil)});
    
    //Conexion del vector con el servicio
    this.usuarios = this.registroServices.usuarios;
    
    //Estatus de conexión
    if(this.registroServices.status==true){
      this.router.navigate(['/inicio'])
    }

  }
  //Crear usuario de forma local
  onAgregarUsuario(){
    console.log("el nombre es: "+this.nombre+"\nel nick es: "+this.nick+"\nel nacimiento es: "+
    this.nacimiento+ "\n la identificacion es:"+this.identificacion);
    this.registroServices.onValidacionid(this.identificacion);
    this.valido = this.registroServices.valido;
        if(this.valido===true){
        console.log("es valido");
          this.registroServices.onAgregar(new Perfil(this.nombre, this.nick, this.nacimiento, this.contrasena,this.identificacion));
          this.router.navigate(['/login']); 
        }else{
        this.router.navigate(['/registro']);
        alert("identificacion en uso");
        }  
    }
  
  //Agregar usuario mediante FB  
  onAgregarUsuarioFB(){
    this.registroServices.signInWithFB();
    this.estado = this.registroServices.status;
    this.nombrers = this.registroServices.user.name;
    this.correo = this.registroServices.user.email;
    this.url = this.registroServices.user.photoUrl;
    this.tipoCuenta = false;
        if (this.estado === true){
          console.log("conecto");
          this.registroServices.onAgregar(new Perfil(this.nombrers,this.correo));
          console.log(this.nombrers,this.correo,this.url);
        } 
        else{
        this.router.navigate(['/registro']);
        alert("pailas en uso");
        }   
  } 
}
