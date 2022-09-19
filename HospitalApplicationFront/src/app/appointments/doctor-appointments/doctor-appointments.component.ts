import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { NewAppointmentComponent } from '../new-appointment/new-appointment.component';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {
  appointments : any;
  userId: string | undefined | null;
  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    console.log(this.userId);
    if (this.userId){
      this.appointmentService.getDoctorAppointments(this.userId).subscribe(res => {
        let temp: any;
        temp = res;
        this.appointments = temp.appointments;
      })
    }
  }

  CreateAppointment(){
    this.dialog.open(NewAppointmentComponent)
      .afterClosed().subscribe(res => {
        if (res.saved){
          this.getAppointments();
        }
      });
  }

  startAppointment(appointmentId: string){
    this.router.navigate(['appointment/' + appointmentId]);
  }

  getAppointments(){
    if (this.userId){
      this.appointmentService.getPatientAppointments(this.userId).subscribe(res => {
        this.appointments = res;
      })
    }
  }

}
