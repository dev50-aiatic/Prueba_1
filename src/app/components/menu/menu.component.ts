import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: PerfilService, private afsAuth: AngularFireAuth) { }
  public app_name: string = 'A&App';
  public isLogged: boolean = false;
  
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.afsAuth.auth.signOut();
  }


}

