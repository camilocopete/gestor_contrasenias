// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        // Inicio de sesión exitoso, redirige o realiza acciones necesarias
       alert('Inicio de sesión exitoso');
       location.href = '/home';
      } else {
        // Mostrar mensaje de error o tomar medidas adecuadas
        alert('Credenciales inválidas');
      }
    });
  }
}
