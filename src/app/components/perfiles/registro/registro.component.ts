import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuarios:Perfil[] = [];
  nombre:String;
  nick:String;
  nacimiento:Date;
  contrasena:String;
  identificacion:number;

  constructor(private registroServices:PerfilService, private router: Router) { }

  ngOnInit() {
    this.usuarios = this.registroServices.usuarios;
  }
  onAgregarUsuario(){
    console.log("el nombre es: "+this.nombre+"\nel nick es: "+this.nick+"\nel nacimiento es: "+
    this.nacimiento+ "\n la identificacion es:"+this.identificacion);
    this.registroServices.onAgregar(new Perfil(this.nombre, this.nick, this.nacimiento, this.contrasena,this.identificacion));
    this.router.navigate(['/login']);
    alert("Usuario Ingresado Corectamente")} 
}
  

