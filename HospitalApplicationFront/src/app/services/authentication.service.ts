import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Patient } from '../login/registration/patient';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): any {
    return this.http.post(environment.serverUrl + 'login', { username: username, password: password })
  }

  register(patient: Patient) {
    return this.http.post(environment.serverUrl + 'patients', {
      username: patient.username,
      firstName: patient.firstName,
      surname: patient.surname,
      personalNumber: patient.personalNumber,
      adress: patient.adress,
      gender: patient.gender,
      weight: patient.weight,
      height: patient.height,
      bloodType: patient.bloodType,
      phoneNumber: patient.phoneNumber,
      email: patient.email,
      password: patient.password
    })
  }
}
