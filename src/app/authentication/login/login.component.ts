import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { LoginFormData } from '../login-form-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);
    const loginFormData =
     new LoginFormData(signInForm.value.username, signInForm.value.password);
    this.authenticationService.authenticate(loginFormData);
  }

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
