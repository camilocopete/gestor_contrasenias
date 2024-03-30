import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PasswordCreateComponent } from './pages/password-create/password-create.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowPasswordComponent } from './pages/show-password/show-password.component'; 
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: PasswordCreateComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'show',
    component: ShowPasswordComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
