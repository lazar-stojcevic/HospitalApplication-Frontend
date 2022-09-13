import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {
  appointments : any;
  userId: string | undefined | null;
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    console.log(this.userId);
    if (this.userId){
      this.appointmentService.getPatientAppointments(this.userId).subscribe(res => {
        console.log('aaaaaaaaaaaa');
        this.appointments = res as Appointment[];
        console.log(this.appointments);
      })
    }
  }

}
