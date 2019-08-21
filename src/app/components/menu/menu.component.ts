import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  estado = false;
  constructor(private menuService:PerfilService , private router:Router) { }
    
  ngOnInit() { 
  }

  ngDoCheck(): void {
    this.estado= this.menuService.status;
  }

  Desconexion() {
    this.menuService.status = false;
    console.log(this.estado)
  }
  
  ToggleNavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
}
}

