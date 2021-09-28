import { Injectable } from '@angular/core';
import { LoginFormData } from './login-form-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private registeredUsers: LoginFormData[] = [
    { username: 'admin', password: '12345' }
  ];

  authenticate() {
    
  }

  constructor() { }
}
