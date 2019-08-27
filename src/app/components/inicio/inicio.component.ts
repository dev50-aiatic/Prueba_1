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
  

  constructor(private perfilService:PerfilService, private router:Router) { }
    ngOnInit() {
      this.usuarioPerfil = this.perfilService.usuarioServicio;
      
  }
}