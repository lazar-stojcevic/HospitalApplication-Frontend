import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAppointmentsComponent } from './appointments/doctor-appointments/doctor-appointments.component';
import { OneAppointmentComponent } from './appointments/one-appointment/one-appointment.component';
import { PatientAppointmentsComponent } from './appointments/patient-appointments/patient-appointments.component';
import { PatientAccountComponent } from './financial/patient-account/patient-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { DoctorProfileComponent } from './profiles/doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './profiles/patient-profile/patient-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'appointments', component: PatientAppointmentsComponent },
  { path: 'doctor-appointments', component: DoctorAppointmentsComponent },
  { path: 'appointment/:id', component: OneAppointmentComponent },
  { path: 'doctor/:id', component: DoctorProfileComponent },
  { path: 'patient/:id', component: PatientProfileComponent },
  { path: 'patient/account/:id', component: PatientAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
