import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { PerfilService} from '../../../services/perfil.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { Perfil } from '../../../models/perfil';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

 
  
  constructor(private router: Router, private Service: PerfilService, private storage: AngularFireStorage) { }
  
  @ViewChild('imageUser',{static:true}) inputImageUser: ElementRef;
  @ViewChild('nombreUsuario',{static:true}) inputNombreUsuario: ElementRef;
  @ViewChild('email',{static:true}) inputEmail: ElementRef;
  @ViewChild('password',{static: true}) inputPassword: ElementRef;

 
  

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  public email: string = '';
  public password: string = '';

  ngOnInit() {
    
    this.Service.getPerfil();
    

  }
 
  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  onAddUser() {
    this.Service.registerUser(this.email, this.password)
      .then((res) => {
        this.Service.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: this.inputNombreUsuario.nativeElement.value,
              photoURL: this.inputImageUser.nativeElement.value
            }).then(() => {
              this.router.navigate(['perfil']);
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }
  onLoginGoogle(): void {
    this.Service.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.Service.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginRedirect(): void {
    this.router.navigate(['perfil']);
  }
  
  onSubmit(formTemplate)
{
  if (formTemplate.value.$key = null)
    this.Service.crearPerfil(formTemplate.value)
 else
    this.Service.crearPerfil(formTemplate.value);
    this.resetForm(formTemplate);
}
  resetForm(formTemplate)
{
  if(formTemplate != null)
  formTemplate.reset();
  this.Service.seleccionarPerfil = new Perfil();
}
}
  

