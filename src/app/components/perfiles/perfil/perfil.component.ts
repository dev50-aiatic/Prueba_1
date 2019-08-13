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
  imgSrc: string;
selectedImage: any = null;
isSubmitted: boolean;

formTemplate = new FormGroup({
  
  imageUrl: new FormControl('')
  
})
  
  constructor(public perfilService: PerfilService,private storage: AngularFireStorage) { }
  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  ngOnInit() {
    this.perfilService.getImageDetailList();
    this.rresetForm();
    this.perfilService.getPerfil();
    this.resetForm();

  }
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = 'assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }
  oonSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.perfilService.insertImageDetails(formValue);
            this.rresetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  rresetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
  
      imageUrl: '',
      
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
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

