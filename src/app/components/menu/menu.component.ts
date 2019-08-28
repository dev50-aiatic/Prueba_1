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
    this.menuService.verificacion();
    this.estado = this.menuService.loggedIn;

    this.menuService.inicioSesion();
    this.user = this.menuService.user;
    this.loggedIn = this.menuService.loggedIn;

    if(this.menuService.status==true){
      this.router.navigate(['/inicio'])
    }
  }

  ngDoCheck(): void {
    this.menuService.verificacion();
    this.estado = this.menuService.loggedIn;
  }

  Desconexion() {
    console.log('Salio');
    this.menuService.signOut();
    this.router.navigate(['/login'])
  }
  
  ToggleNavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
}
}

