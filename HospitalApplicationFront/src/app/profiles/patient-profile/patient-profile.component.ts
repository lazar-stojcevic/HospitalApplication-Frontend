import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patient: any;
  routeId = this.route.snapshot.paramMap.get('id');
  userId = localStorage.getItem('id');

  usernameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  firstNameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  surnameForm = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-z0-9]+$/i)]);
  personalNumberForm = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{13}/i)]);
  phoneNumberForm = new FormControl('', [this.patternValidator('[- +()0-9]+', { phoneNumber: true })]);
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  dateOfBirthForm = new FormControl('', [Validators.required]);
  adressForm = new FormControl('', [Validators.required]);
  genderForm = new FormControl('', [Validators.required]);
  weightForm = new FormControl('', [Validators.required]);
  heightForm = new FormControl('', [Validators.required]);
  bloodTypeForm = new FormControl('', [Validators.required]);

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService) {
    this.patient = {
      username: '',
      firstname: '',
      surname: '',
      personalNumber: '',
      phoneNumber: '',
      email: '',
      dateOfBirth: null,
      height: '',
      weight: '',
      bloodType: '',
      adress: '',
      gender: ''
    }
  }

  ngOnInit(): void {
    if (this.routeId != null) {
      this.patientService.getOnePatient(this.routeId).subscribe(res => {
        this.patient = res;
      })
    }
  }

  saveChanges() {
    this.patient.dateOfBirth = new Date(this.patient.dateOfBirth);
    this.patient.dateOfBirth.setDate(this.patient.dateOfBirth.getDate() + 1);
    this.patientService.updatePatientData(
      this.patient.id,
      this.patient.username,
      this.patient.firstName,
      this.patient.surname,
      this.patient.personalNumber,
      this.patient.phoneNumber,
      this.patient.email,
      this.patient.dateOfBirth,
      this.patient.adress,
      this.patient.gender,
      this.patient.weight,
      this.patient.height,
      this.patient.bloodType).subscribe(res => {
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
