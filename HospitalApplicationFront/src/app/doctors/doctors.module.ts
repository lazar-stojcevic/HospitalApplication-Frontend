import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AllDoctorsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DoctorsModule { }
