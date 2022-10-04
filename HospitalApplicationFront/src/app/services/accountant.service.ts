import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  constructor(private http: HttpClient, private router: Router) { }

  GetOneAccountant(id: string) {
    return this.http.get(environment.serverUrl + 'accountants/' + id);
  }

  updateAccountantData(
    id: string,
    username: string,
    firstname: string,
    surname: string,
    personalNumber: string,
    phoneNumber: string,
    email: string,
    dateOfBirth: Date) {
    return this.http.put(environment.serverUrl + 'accountants/' + id, {
      id: id,
      username: username,
      firstName: firstname,
      surname: surname,
      personalNumber: personalNumber,
      phoneNumber: phoneNumber,
      email: email,
      dateOfBirth: dateOfBirth,
    });
  }

}
