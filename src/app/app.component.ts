import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
}
@Component({
  selector: 'TopBar',
  template: '<h1> Bienvenido, Pagina en construccion </h1>' 
})
export class TopBar{
}

@Component ({
  selector: 'Menu',
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
          <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
          <a class="nav-link" href="#">Perfil <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
          <a class="nav-link" href="#">Ajustes <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
          <a class="nav-link" [routerLink]="['home']">Tareas <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
          <a class="nav-link" href="#">Salir <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    
  </div>
</nav>
`  
})export class Menu{  
}