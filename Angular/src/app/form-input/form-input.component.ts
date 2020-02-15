import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})

export class FormInputComponent {

  @Input() texto:string;
  @Input() tipo:string;
  @Input() placeholder:string;
  @Input() alCambiarValor;

  mostrarMsjError:boolean = false;
  valorIngresado:string = "";
  validCorrecta:boolean = false;
  msjError:string = "Error de prueba";

  actualizarEstado(valorIngresado){
    if(valorIngresado == ""){
      this.msjError = "Campo no puede estar vacío";
      this.validCorrecta = false;
      this.mostrarMsjError = true;
    } else if(this.tipo=="email" && !this.validateEmail(valorIngresado)){
      this.msjError = "Formato de correo incorrecto";
      this.validCorrecta = false;
      this.mostrarMsjError = true;
    } else {
      this.validCorrecta = true;
      this.mostrarMsjError = false;
    }

    this.valorIngresado = valorIngresado;
    this.alCambiarValor(this.valorIngresado, this.validCorrecta);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
