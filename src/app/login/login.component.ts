import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { LoginFormData } from '../authentication/login-form-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) { }

  isButtonClicked = false;

  onSubmit(signInForm: NgForm) {
    this.isButtonClicked = true;
    const loginFormData =
      new LoginFormData(signInForm.value.username, signInForm.value.password);
    this.authenticationService.authenticate(loginFormData);
    console.log(this.authenticationService.isPasswordCorrect);
    console.log(this.authenticationService.isUsernameCorrect);
  }

  ngOnInit(): void {
  }

}
