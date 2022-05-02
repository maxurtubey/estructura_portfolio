import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  preserveWhitespaces: true
})

export class LoginComponent implements OnInit {
  
  formulario: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {

  //Creamos el grupo de controles para el formulario de login
  this.formulario = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    clave: ['', [Validators.required, Validators.minLength(8)]],
    //email:['', [Validators.required, Validators.email]],
  })
}

ngOnInit() {}

get Nombre(){
  return this.formulario.get("nombre");
}
get Clave(){
  return this.formulario.get("clave");
}
// get Mail(){
//  return this.formulario.get("email");
// }
get PasswordValid(){
  return this.Clave?.touched && !this.Clave?.valid;
}
// get MailValid() {
//   return false
// }

onEnviar(event: Event){
  // Detenemos la propagación o ejecución del comportamiento submit de un form
  event.preventDefault;

  if (this.formulario.valid) {
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo OK ¡Se envió el formuario!")
  } else {
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.formulario.markAllAsTouched();
  }

}

}