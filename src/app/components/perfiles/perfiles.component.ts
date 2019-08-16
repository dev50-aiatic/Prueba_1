
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

  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;
  
  formTemplate = new FormGroup({
    
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
    
  })
  constructor(public perfilService: PerfilService,private storage: AngularFireStorage) { }

uploadPercent: Observable<number>;
urlImage: Observable<string>;

  ngOnInit() { 
    this.rresetForm();
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
 
  get formControls() {
    return this.formTemplate['controls'];
  }
  rresetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
  
      caption: '',
      imageUrl: '',
      category: 'Animal'
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
}