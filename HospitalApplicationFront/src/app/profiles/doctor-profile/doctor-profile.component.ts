import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctor: any;
  routeId = this.route.snapshot.paramMap.get('id');
  userId = localStorage.getItem('id');

  usernameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  firstNameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  surnameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  personalNumberForm = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{13}/i)]);
  phoneNumberForm = new FormControl('', [this.patternValidator('[- +()0-9]+', { phoneNumber: true })]);
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  dateOfBirthForm = new FormControl('', [Validators.required]);
  medicalSpecialityForm = new FormControl('', [Validators.required]);

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService) {
      this.doctor = {
        username: '', 
        firstname: '',
        surname: '', 
        personalNumber: '', 
        phoneNumber: '', 
        email: '',
        dateOfBirth: null,
        medicalSpeciality: 'Internists',
      }
    }

  ngOnInit(): void {
    if (this.routeId != null){
      this.doctorService.getOneDoctors(this.routeId).subscribe(res => {
        this.doctor = res;
      })
    }
  }

  saveChanges(){
    this.doctor.dateOfBirth.setDate(this.doctor.dateOfBirth.getDate() + 1);
    this.doctorService.updateDoctorData(
      this.doctor.id,
      this.doctor.username, 
      this.doctor.firstName, 
      this.doctor.surname,
      this.doctor.personalNumber,
      this.doctor.phoneNumber,
      this.doctor.email,
      this.doctor.dateOfBirth,
      this.doctor.medicalSpeciality).subscribe(res => {
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
