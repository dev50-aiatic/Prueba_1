import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';
import { Perfil } from '../../../models/perfil';


@Component({
  selector: 'app-listaperfiles',
  templateUrl: './listaperfiles.component.html',
  styleUrls: ['./listaperfiles.component.css']
})
export class ListaperfilesComponent implements OnInit {

  Listaperfiles: Perfil[];

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.perfilService.getPerfil()
    .snapshotChanges()
    .subscribe(item =>{
      this.Listaperfiles = [];
      item.forEach(element => {
        let X = element.payload.toJSON();
        X["$key"] = element.key;
        this.Listaperfiles.push(X as Perfil);
      });
    });

  }
  Editar(perfil: Perfil){
    this.perfilService.seleccionarPerfil = Object.assign({},perfil);
  }
  Borrar($key: string){
    this.perfilService.eliminarPerfil($key);
  }
}
