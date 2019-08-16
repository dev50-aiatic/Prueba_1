import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Perfil } from '../models/perfil';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  imageDetailList: AngularFireList<any>;
  perfilList: AngularFireList<any>;
  seleccionarPerfil: Perfil = new Perfil();

  constructor(private firebase: AngularFireDatabase,private afsAuth: AngularFireAuth, private afs: AngularFirestore,) { }
  getPerfil(){
    return this.perfilList = this.firebase.list('perfiles');
  }
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }
  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }
  loginFacebookUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }
  loginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }
  logoutUser() {
    return this.afsAuth.auth.signOut();
  }
  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: Perfil = {
      id: user.uid,
      email: user.email,    
  }
    return userRef.set(data, { merge: true })
  }
  crearPerfil (perfil: Perfil)
  {
    this.perfilList.push({
      nombre: perfil.name,
      email: perfil.email,
      correo: perfil.password,
    });
  }
}
 
  


