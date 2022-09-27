import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/services/appointment.service';
import { NewAppointmentComponent } from '../new-appointment/new-appointment.component';

@Component({
  selector: 'app-patient-past-appointments',
  templateUrl: './patient-past-appointments.component.html',
  styleUrls: ['./patient-past-appointments.component.css']
})
export class PatientPastAppointmentsComponent implements OnInit {
  appointments : any;
  pastAppointments : any;

  constructor(
    private appointmentService: AppointmentService,
    public dialogRef: MatDialogRef<PatientPastAppointmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {patientId: string|undefined}) { }

  ngOnInit(): void {
    if (this.data.patientId){
      this.appointmentService.getPatientAppointments(this.data.patientId).subscribe(res => {
        this.appointments = res;
        this.pastAppointments = this.appointments.appointments.filter(x => x.report);
      })
    }
  }

}
