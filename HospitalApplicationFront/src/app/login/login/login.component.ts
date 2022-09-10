import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ""
  password = ""

  usernameForm = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  passwordForm = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {

  }

  getUsernameErrorMessage() {
    return this.usernameForm.hasError('required') ? 'Morate unesi Vaše korisničko ime' :
      '';
  }

  getPasswordErrorMessage() {
    return this.passwordForm.hasError('required') ? 'Morate unesi šifru' :
      '';
  }

}
