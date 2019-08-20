import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { login } from 'src/app/models/login';
import { PerfilService } from '../../../services/perfil.service';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild ("nick",{static:false}) nickInput:ElementRef;
  @ViewChild ("contraseña",{static:false}) contraseña:ElementRef;
  @Output() estado = false;

  constructor(private perfilogin:PerfilService,private router:Router) { }
 
  ngOnInit() {
    this.perfilogin.obtenerUsuarios().subscribe((Perfil:Perfil[])=>{this.perfilogin.setUsuarios(Perfil)});
  }
  onValidarDatos(){
    let persona1 = new login(this.nickInput.nativeElement.value,this.contraseña.nativeElement.value);
    this.perfilogin.onValidacionPersona(persona1);
    this.perfilogin.onValidacion(persona1);
    this.estado = this.perfilogin.status;
    console.log("el estado del status es: "+this.perfilogin.status);
    if(this.estado===true){
      console.log("atino");
      this.router.navigate(['perfil']);
    }else{
      this.router.navigate(['/ingresar']);
      alert("usuario o contraseña invalido");
    }
    
  }
}

