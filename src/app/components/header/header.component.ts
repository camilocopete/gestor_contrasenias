import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  name: any="";
  constructor(private router: Router) { }

  ngOnInit() {
    this.name = localStorage.getItem('currentUser');
   
  }

  showNavbar(): boolean {
    // Mostrar la barra de navegación solo si no estamos en la página de inicio de sesión
    return this.router.url !== '/login';
  }

}
