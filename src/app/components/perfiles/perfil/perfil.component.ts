import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';
import { Router } from '@angular/router';
import { Perfil } from '../../../models/perfil';

 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
  
})


export class PerfilComponent implements OnInit {
  usuarioPerfil:Perfil;
  
  estado = false;
  url:string;
  nombre:string;
  correo:string;
  tipoCuenta:boolean;

  constructor(private perfilService:PerfilService, private router:Router) { }
    ngOnInit() {
      this.usuarioPerfil = this.perfilService.usuarioServicio;
      

      if(this.perfilService.identificacionCuenta()=='interno'){
        this.usuarioPerfil = this.perfilService.usuarioServicio;
        this.tipoCuenta = true;
      }else if (this.perfilService.identificacionCuenta()=='facebook') {
        this.nombre = this.perfilService.user.name;
        this.correo = this.perfilService.user.email;
        this.url = this.perfilService.user.photoUrl;
        this.tipoCuenta = false;
    }
  }
  

  
}

