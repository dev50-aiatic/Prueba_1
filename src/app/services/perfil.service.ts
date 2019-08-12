import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  listaperfiles: AngularFireList<any>;
  seleccionarPerfil: Perfil = new Perfil();

  constructor(private firebase: AngularFireDatabase) { }

  getPerfil()
  {
   return this.listaperfiles = this.firebase.list('perfiles');
  }

  crearPerfil (perfil: Perfil)
  {
    this.listaperfiles.push({
      nombre: perfil.nombre,
      apellido: perfil.apellido,
      correo: perfil.correo,
      fecha: perfil.fecha,
     
    });
  }
  updatePerfil (perfil: Perfil)
  {
    this.listaperfiles.update(perfil.$key,{
      nombre: perfil.nombre,
      apellido: perfil.apellido,
      correo: perfil.correo,
      fecha: perfil.fecha,
     
    });
  }
  eliminarPerfil ($key: string)
  {
    this.listaperfiles.remove($key);
  }
}

