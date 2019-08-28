
import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service'
import { NgForm } from '@angular/forms';
import { Perfil } from 'src/app/models/perfil';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {

  
  
    
  
  constructor(public perfilService: PerfilService,private storage: AngularFireStorage) { }


  ngOnInit() { 
    
  }
  
}
 
  
 
