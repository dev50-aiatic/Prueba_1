import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Router } from '@angular/router';
import { Perfil } from '../../models/perfil';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuarioPerfil:Perfil;
  
  estado = false;
  url:string;
  nombre:string;
  correo:string;
  tipoCuenta:boolean;

  constructor(private perfilService:PerfilService, private router:Router) { }
    ngOnInit() {
      if(this.perfilService.status==true){
        this.router.navigate(['/inicio'])
      
      }
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
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.estado = this.perfilService.status;
    this.usuarioPerfil = this.perfilService.usuarioServicio;
    if(this.estado===false){
      this.router.navigate(['/login']);
    }
  }
}