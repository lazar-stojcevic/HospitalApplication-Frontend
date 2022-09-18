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

  getFreeTerms(patientId: string, doctorId: string, date: string, length: string){
    return this.http.get(environment.serverUrl + 'appointments/free/' + patientId + '/' + doctorId + '/' + date + '/' + length);
  }

  createNewAppointment(patientId: string, doctorId: string, startTime: string, endTime: string){
    return this.http.post(environment.serverUrl + 'appointments', {patientId: patientId, doctorId: doctorId, startTime: startTime, endTime: endTime});
  }
}
