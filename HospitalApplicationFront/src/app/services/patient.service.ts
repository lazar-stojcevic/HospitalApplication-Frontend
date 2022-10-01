import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient, private router: Router) { }

  getOnePatient(id: string) {
    return this.http.get(environment.serverUrl + 'patients/' + id);
  }

  updatePatientData(
    id: string,
    username: string,
    firstname: string,
    surname: string,
    personalNumber: string,
    phoneNumber: string,
    email: string,
    dateOfBirth: Date,
    adress: string,
    gender: string,
    weight: string,
    height: string,
    bloodType: string) {
    return this.http.put(environment.serverUrl + 'patients/' + id, {
      id : id,
      username: username,
      firstName: firstname,
      surname: surname,
      personalNumber: personalNumber,
      adress: adress,
      gender: gender,
      weight: weight,
      height: height,
      bloodType: bloodType,
      phoneNumber: phoneNumber,
      email: email,
      dateOfBirth: dateOfBirth   
    });
  }
}
