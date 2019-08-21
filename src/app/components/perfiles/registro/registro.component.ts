import { Component, OnInit, ElementRef, ViewChild, Input, Output } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
import { identificacion } from 'src/app/models/identificacion';
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

  
  constructor(private registroServices:PerfilService, private router: Router) { }

  ngOnInit() {
    this.registroServices.obtenerUsuarios().subscribe((Perfil:Perfil[])=>{this.registroServices.setUsuarios(Perfil)});
    this.usuarios = this.registroServices.usuarios;
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
}
  

