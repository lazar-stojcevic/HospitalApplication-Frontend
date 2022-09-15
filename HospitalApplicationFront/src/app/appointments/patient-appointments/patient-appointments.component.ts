import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from '../appointment';
import { NewAppointmentComponent } from '../new-appointment/new-appointment.component';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {
  appointments : any;
  pastAppointments : any;
  nextAppointments : any;
  userId: string | undefined | null;
  constructor(private appointmentService: AppointmentService, public dialog: MatDialog) { }
  

  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    console.log(this.userId);
    if (this.userId){
      this.appointmentService.getPatientAppointments(this.userId).subscribe(res => {
        this.appointments = res;
        this.pastAppointments = this.appointments.appointments.filter(x => x.report);
        this.nextAppointments = this.appointments.appointments.filter(x => !x.report);
      })
    }
  }

  CreateAppointment(){
    this.dialog.open(NewAppointmentComponent)
      .afterClosed().subscribe(res => console.log('Dialog zatvoren'));
  }

}
