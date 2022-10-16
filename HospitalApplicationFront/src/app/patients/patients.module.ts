import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AllPatientsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PatientsModule { }
