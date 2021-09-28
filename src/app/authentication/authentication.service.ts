import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormData } from './login-form-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {
  constructor(private router: Router) {}

  private registeredUsers: LoginFormData[] = [new LoginFormData('admin', '12345')];
  isAuthenticated = false;
  isUsernameCorrect = false;
  isPasswordCorrect = false;

  authenticate(loginFormData: LoginFormData): void {
    if(this.loginFormDataCheck(loginFormData)) {
        this.isAuthenticated = true;
        this.router.navigate(['/profile']);
      } else {
        this.isAuthenticated = false;
      }
  }

  loginFormDataCheck(loginFormData: LoginFormData) {
    return this.registeredUsers
      .some(user =>
        this.usernameCheck(loginFormData.getUsername(), user)
        && this.passwordCheck(loginFormData.getPassword(), user)
      )
  }

  usernameCheck(username: string, registeredUser: LoginFormData): boolean {
    if (registeredUser.getUsername() === username) {
      this.isUsernameCorrect = true;
      return true;
    } else {
      this.isUsernameCorrect = false;
      return false;
    }
  }

  passwordCheck(password: string, registeredUser: LoginFormData): boolean {
    if (registeredUser.getPassword() === password) {
      this.isPasswordCorrect = true;
      return true;
    } else {
      this.isPasswordCorrect = false;
      return false;
    }
  }

  ngOnInit() {
    this.registeredUsers.push(new LoginFormData('admin', '12345'));
  }
}
