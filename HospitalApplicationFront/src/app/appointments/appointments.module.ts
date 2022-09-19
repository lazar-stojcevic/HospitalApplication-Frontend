import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from '@angular/material/card';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';



@NgModule({
  declarations: [
    PatientAppointmentsComponent,
    NewAppointmentComponent,
    DoctorAppointmentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
})
export class AppointmentsModule { }
