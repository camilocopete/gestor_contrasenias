import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Crear', url: '/create', icon: 'mail' },
    { title: 'Ver', url: '/show', icon: 'paper-plane' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    location.href = '/login';
    // Aquí podrías redirigir a la página de inicio o realizar otras acciones necesarias
  }
}
