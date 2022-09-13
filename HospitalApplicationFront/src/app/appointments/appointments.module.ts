import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    PatientAppointmentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class AppointmentsModule { }
