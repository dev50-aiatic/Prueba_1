import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  estado = false;
  public user: SocialUser;
  private loggedIn: boolean;

  constructor(private menuService:PerfilService , private router:Router) { }
    
  ngOnInit() { 
    this.user = this.menuService.user;
    this.menuService.inicioSesion(); 
    }
  

  ngDoCheck(): void {
    this.menuService.verificacion();
    this.estado = this.menuService.status;  
 
  }

  Desconexion() {
    console.log('Salio');
    this.menuService.signOut();
    this.menuService.status = false;
    
  }
  
  ToggleNavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
}
}

