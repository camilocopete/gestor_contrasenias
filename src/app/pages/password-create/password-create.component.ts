import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from  '../../services/user-service.service';


@Component({
  selector: 'app-password-create',
  templateUrl: './password-create.component.html',
  styleUrls: ['./password-create.component.scss'],
})

export class PasswordCreateComponent{

  passwordForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private passwordService: PasswordService) { this.initializeForm(); }

  private initializeForm() {
    this.passwordForm = this.formBuilder.group({
      title: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordType: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      const { title, username, password, passwordType } = this.passwordForm.value;
      this.passwordService.addPassword(title, username, password, passwordType);
      alert("Contraseña creada");
      this.passwordForm.reset();
    } else {
      console.log("error");
    }
  }
    



}
