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
  
  @Output() valido = false;
  usuarios:Perfil[] = [];
  nombre:string;
  nick:string;
  nacimiento:Date;
  contrasena:string;
  identificacion:number;
  usuarioPerfil:Perfil;
  
  estado = false;
  url:string;
  nombrers:string;
  correo:string;
  tipoCuenta:boolean;
  constructor(private registroServices:PerfilService, private router: Router) { }

  ngOnInit() {
    this.registroServices.obtenerUsuarios().subscribe((Perfil:Perfil[])=>{this.registroServices.setUsuarios(Perfil)});
    this.usuarios = this.registroServices.usuarios;
    if(this.registroServices.status==true){
      this.router.navigate(['/inicio'])
    }
    if(this.registroServices.identificacionCuenta()=='interno'){
      this.usuarioPerfil = this.registroServices.usuarioServicio;
      this.tipoCuenta = true;
    }else if (this.registroServices.identificacionCuenta()=='facebook') {
      this.nombre = this.registroServices.user.name;
      this.correo = this.registroServices.user.email;
      this.url = this.registroServices.user.photoUrl;
      this.tipoCuenta = false;
  }
  }
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
  onAgregarUsuarioFB(){
    this.registroServices.signInWithFB();
    this.estado = this.registroServices.status;
    this.nombrers = this.registroServices.user.name;
      this.correo = this.registroServices.user.email;
      this.url = this.registroServices.user.photoUrl;
      this.tipoCuenta = false;
    if (this.estado === true){
      console.log("es valido");
      this.registroServices.onAgregar(new Perfil(this.nombrers,this.correo));
      console.log(this.nombrers);
    }
    
    //this.registroServices.onValidacionid(this.identificacion);
    //this.valido = this.registroServices.valido;
    //if(this.valido===true){
    
    //  this.router.navigate(['/login']);
      
    else{
    this.router.navigate(['/registro']);
    alert("pailas en uso");
    }
    
     
  }

  
}
