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
  template: `
  <div class="container">
    <div class="row">
        <div class="col-md-2">
            <ul class="nav nav-pills nav-stacked">
                <li class="active"><a href="#"><i class="fa fa-home fa-fw"></i>Home</a></li>
                <li><a><i class="fa fa-list-alt fa-fw"></i>Inicio</a></li>
                <li><a><i class="fa fa-file-o fa-fw"></i>Perfil</a></li>
                <li><a><i class="fa fa-bar-chart-o fa-fw"></i>Tareas</a></li>
                <li><a><i class="fa fa-table fa-fw"></i>Ajustes</a></li>
                <li><a><i class="fa fa-tasks fa-fw"></i>Salir</a></li>
            </ul>
        </div>
    </div>
</div>
`  
})export class Menu{  
}