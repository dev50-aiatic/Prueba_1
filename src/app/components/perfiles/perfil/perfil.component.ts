import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service'
import { NgForm } from '@angular/forms';
import { Perfil } from 'src/app/models/perfil';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
  
})


export class PerfilComponent implements OnInit {

  constructor(public authService: PerfilService,private storage: AngularFireStorage) { }
  user: Perfil = {
    name: '',
    email: '',
    photoUrl: '', 
  };
    public providerId: string = 'null';
    ngOnInit() {
      this.authService.isAuth().subscribe(user => {
        if (user) {
          this.user.name = user.displayName;
          this.user.email = user.email;
          this.user.photoUrl = user.photoURL;
          this.providerId = user.providerData[0].providerId;
        }
      })
    } 
  }
  

  


