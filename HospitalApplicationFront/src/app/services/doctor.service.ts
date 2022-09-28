import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllDoctors() {
    return this.http.get(environment.serverUrl + 'doctors');
  }

  getOneDoctors(id: string) {
    return this.http.get(environment.serverUrl + 'doctors/' + id);
  }

  updateDoctorData(
    id: string,
    username: string,
    firstname: string,
    surname: string,
    personalNumber: string,
    phoneNumber: string,
    email: string,
    dateOfBirth: Date,
    medicalSpeciality: string) {
    return this.http.put(environment.serverUrl + 'doctors/' + id, {
      id: id,
      username: username,
      firstName: firstname,
      surname: surname,
      personalNumber: personalNumber,
      phoneNumber: phoneNumber,
      email: email,
      dateOfBirth: dateOfBirth,
      medicalSpeciality: medicalSpeciality
    });
  }
}
