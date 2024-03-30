import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private passwords: { title: string; username: string; password: string; passwordType: string }[] = [];
  private userData: { username: string; password: string }[] = [];
  private apiUrl = 'assets/api/passwords.json';

  constructor(private storage: Storage, private http: HttpClient) {
    this.init();
    this.loadPasswords();
  }
  async init() {
    const storage = await this.storage.create();
    // Realizar operaciones de lectura o escritura aquí
  }
  private async userDataF() {
    const userData = await this.storage.get('userData');
    this.userData = userData || [];
  }

  private async loadPasswords() {
    const storedPasswords = await this.storage.get('passwords');
    this.passwords = storedPasswords || [];
  }

  getPasswords(): { title: string; username: string; password: string; passwordType: string }[] {
    return this.passwords;
  }

  addPassword(title: string, username: string, password: string, passwordType: string): void {
    this.passwords.push({ title, username, password, passwordType });
    this.savePasswords();
  }

  removePassword(title: string): void {
    this.passwords = this.passwords.filter(password => password.title !== title);
    this.savePasswords();
  }
  
  private savePasswords() {
    this.storage.set('passwords', this.passwords);
  }

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateJsonData(updatedData: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, updatedData);
  }

  deleteJsonData(): Observable<any> {
    return this.http.delete<any>(this.apiUrl);
  }

  addNewRecord(newRecord:any): Observable<any> {
    // Agregar lógica para enviar la solicitud HTTP y agregar el nuevo registro
    console.log(newRecord);
    return this.http.post<any>(this.apiUrl, newRecord);
  }
}
