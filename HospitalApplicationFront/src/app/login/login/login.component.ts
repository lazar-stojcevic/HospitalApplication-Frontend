import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authenticationService.login(this.username, this.password).subscribe((res: 
      { 
        token: string; 
        role: string;
        userId: string;
      }) => {
        if (res.token != ""){
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          localStorage.setItem('id', res.userId);
          this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });
        }else{
          alert("Pogresna sifra");
        }
    });
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
