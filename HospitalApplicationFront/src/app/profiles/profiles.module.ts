import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';



@NgModule({
  declarations: [
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProfilesModule { }
