import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PasswordService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.scss'],
})
export class ShowPasswordComponent implements OnInit {
  jsonData: any;
  passwords: {
    title: string;
    username: string;
    password: string;
    passwordType: string;
  }[] = [];

  constructor(private passwordService: PasswordService) {
    setTimeout(() => {
    this.passwords = this.passwordService.getPasswords();
    this.fetchJsonData();

    }, 1000);
  }

  ngOnInit() {
    
  }

  isBlur = true; // Initially apply the "blur" class

  removeBlurClass() {
    if (this.isBlur == false) {
      this.isBlur = true;
    } else {
      this.isBlur = false;
    }
  }
  removePassword(title: string): void {
    this.passwordService.removePassword(title);
    location.reload();
  }

  copyPassword(password: string) {
    navigator.clipboard.writeText(password);
    alert('Password copiado!');
  }

  fetchJsonData(): void {
    this.passwordService.getJsonData().subscribe((data) => {
      this.jsonData = data;
      this.jsonData = this.jsonData.passwords;

      console.log('Data received successfully:', this.jsonData);
    });
  }

  updateJsonData(): void {
    // Modify this.jsonData as needed
    this.passwordService
      .updateJsonData(this.jsonData)
      .subscribe((updatedData) => {
        console.log('Data updated successfully:', updatedData);
      });
  }

  deleteJsonData(): void {
    this.passwordService.deleteJsonData().subscribe(() => {
      console.log('Data deleted successfully');
      // Optionally, reset this.jsonData or perform other actions after deletion
    });
  }
}
