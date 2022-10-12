import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAccountComponent } from './patient-account/patient-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { InsertDepositDialogComponent } from './insert-deposit-dialog/insert-deposit-dialog.component';



@NgModule({
  declarations: [
    PatientAccountComponent,
    AllAccountsComponent,
    InsertDepositDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FinancialModule { }
