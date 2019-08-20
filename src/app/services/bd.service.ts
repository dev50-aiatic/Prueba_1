import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';

@Injectable()
export class BdService{
    constructor(private htppClients:HttpClient){}

    cargarPersonas(){
        return this.htppClients.get("https://subida-37b9b.firebaseio.com/datos.json");
    }

    guardarUsuario(usuarios:Perfil[]){ console.log(usuarios);
        this.htppClients.put('https://subida-37b9b.firebaseio.com/datos.json', usuarios)
        .subscribe(

            response => console.log("se agrego a personas desde dataService", response),
            error => console.log("Ocurrio algo, inesperado: "+ error)
        );
    }
}