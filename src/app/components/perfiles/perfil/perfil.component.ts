import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service'
import { NgForm } from '@angular/forms';
import { Perfil } from 'src/app/models/perfil';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private perfilService: PerfilService, private storage: AngularFireStorage) { }

 

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
  subir (e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'uploads/profile_${id}';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    
  }
}
