import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service'
import { NgForm } from '@angular/forms';
import { Perfil } from 'src/app/models/perfil';

 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public perfilService: PerfilService,) { }

 

  ngOnInit() {
    this.perfilService.getPerfil();
    this.resetForm();
  }
  onSubmit(perfilForm: NgForm)
  {
    if (perfilForm.value.$key = null)
      this.perfilService.crearPerfil(perfilForm.value)
   else
      this.perfilService.crearPerfil(perfilForm.value);
      this.resetForm(perfilForm);
  }
  resetForm(perfilForm?: NgForm)
  {
    if(perfilForm != null)
    perfilForm.reset();
    this.perfilService.seleccionarPerfil = new Perfil();
  }
  
    
  }

