import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient, private router: Router) { }

  getPatientAppointments(patientId: string){
    return this.http.get(environment.serverUrl + 'appointments/patient/' + patientId);
  }
}
