import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Patient } from './patient';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  maxDate: Date;

  patient = new Patient("", "", "", "", "", "", 0, 0, "A-", "", "", "", "");

  usernameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^^[a-z\\d](?:[a-z\\d]|-(?=[a-z\\d])){0,38}$/i)]);
  nameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  surnameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  personalNumberForm = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{13}/i)]);
  adressForm = new FormControl('', [Validators.required]);
  genderForm = new FormControl('', [Validators.required]);
  weightForm = new FormControl('', [Validators.required]);
  heightForm = new FormControl('', [Validators.required]);
  bloodTypeForm = new FormControl('', [Validators.required]);
  phoneNumberForm = new FormControl('', [this.patternValidator('[- +()0-9]+', { phoneNumber: true })]);
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  passwordForm = new FormControl('', [Validators.required, Validators.minLength(8), this.patternValidator('[0-9]', { hasNumber: true }), this.patternValidator('[A-Z]', { hasUpperCase: true }), this.patternValidator('[a-z]', { hasLowerCase: true }), this.patternValidator("[.,<>/?|';:!@#$%^&*()_+=-]", { hasSpecial: true })]);
  confirmPasswordForm = new FormControl('', [Validators.required, this.equalsToPasswordValidator()]);
  dateOfBirthForm = new FormControl('', [Validators.required]);

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.maxDate = new Date()
   }

  ngOnInit(): void {
  }

  register(){
    this.authenticationService.register(this.patient).subscribe(res => {
      console.log(res);
      this.router.navigate(['login'])
    });
  }

  private patternValidator(regex: string, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null as any;
      }
      const valid = RegExp(regex).test(control.value);
      return valid ? null as any : error;
    };
  }

  private equalsToPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value?.toLowerCase() == this.patient.password.toLowerCase() ? null : { passwordsNotEqual: true };
  }

  getnameErrorMessage() {
    return this.usernameForm.hasError('required') ? 'Morate uneti ime' :
      '';
  }

  getsurnameErrorMessage() {
    return this.surnameForm.hasError('required') ? 'Morate uneti prezime' :
      '';
  }

  getPersonalNumberErrorMessage() {
    return this.surnameForm.hasError('required') ? 'Morate uneti JMBG' :
      '';
  }

  getAdressErrorMessage() {
    return this.surnameForm.hasError('required') ? 'Morate uneti adresu' :
      '';
  }

  getHeightErrorMessage() {
    return this.surnameForm.hasError('required') ? 'Morate uneti visinu' :
      '';
  }

  getWeightErrorMessage() {
    return this.surnameForm.hasError('required') ? 'Morate uneti te??inu' :
      '';
  }

  getEmailErrorMessage() {
    return this.emailForm.hasError('required') ? 'Morate uneti email' :
      this.emailForm.hasError('email') ? 'Email nije validan' :
        '';
  }

  getDateErrorMessage() {
    return this.dateOfBirthForm.hasError('required') ? 'Morate uneti datum ro??enja' :
      '';
  }

  getPhoneErrorMessage() {
    return this.phoneNumberForm.hasError('validators') ? '' :
      'Broj telefona nije u dobro formatu';
  }

  getUsernameErrorMessage() {
    return this.usernameForm.hasError('required') ? 'You must enter a value' :
      '';
  }

  getPasswordErrorMessage() {
    return this.passwordForm.hasError('required') ? 'You must enter a value' :
      this.passwordForm.hasError('minlength') ? 'Must be atleast 8 characters' :
        this.passwordForm.hasError('hasNumber') ? 'Must contain atleast 1 number' :
          this.passwordForm.hasError('hasUpperCase') ? 'Must contain 1 upper case' :
            this.passwordForm.hasError('hasLowerCase') ? 'Must contain 1 lower case' :
              this.passwordForm.hasError('hasSpecial') ? 'Must contain 1 special characher' :
               '';
  }

  getConfirmPasswordErrorMessage() {
    return this.confirmPasswordForm.hasError('required') ? 'You must enter a value' :
      'Passwords must match';
  }

}
