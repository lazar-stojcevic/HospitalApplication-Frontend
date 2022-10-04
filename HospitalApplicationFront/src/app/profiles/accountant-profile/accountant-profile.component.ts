import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountantService } from 'src/app/services/accountant.service';

@Component({
  selector: 'app-accountant-profile',
  templateUrl: './accountant-profile.component.html',
  styleUrls: ['./accountant-profile.component.css']
})
export class AccountantProfileComponent implements OnInit {
  accountant: any;
  routeId = this.route.snapshot.paramMap.get('id');
  userId = localStorage.getItem('id');

  usernameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  firstNameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  surnameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  personalNumberForm = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{13}/i)]);
  phoneNumberForm = new FormControl('', [this.patternValidator('[- +()0-9]+', { phoneNumber: true })]);
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  dateOfBirthForm = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute,
    private accountantService: AccountantService) {
      this.accountant = {
        username: '', 
        firstname: '',
        surname: '', 
        personalNumber: '', 
        phoneNumber: '', 
        email: '',
        dateOfBirth: null,
      }
    }

  ngOnInit(): void {
    if (this.routeId != null){
      this.accountantService.GetOneAccountant(this.routeId).subscribe(res => {
        this.accountant = res;
      })
    }
  }

  saveChanges(){
    this.accountant.dateOfBirth = new Date(this.accountant.dateOfBirth);
    this.accountant.dateOfBirth.setDate(this.accountant.dateOfBirth.getDate() + 1);
    this.accountantService.updateAccountantData(
      this.accountant.id,
      this.accountant.username, 
      this.accountant.firstName, 
      this.accountant.surname,
      this.accountant.personalNumber,
      this.accountant.phoneNumber,
      this.accountant.email,
      this.accountant.dateOfBirth).subscribe(res => {
        alert('Podaci su sačuvani');
      })
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
}
