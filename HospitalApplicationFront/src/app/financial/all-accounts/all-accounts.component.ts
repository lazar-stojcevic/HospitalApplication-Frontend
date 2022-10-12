import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewAppointmentComponent } from 'src/app/appointments/new-appointment/new-appointment.component';
import { FinancialService } from 'src/app/services/financial.service';
import { InsertDepositDialogComponent } from '../insert-deposit-dialog/insert-deposit-dialog.component';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {
  accounts : any;

  displayedColumns: string[] = ['patientUsername', 'accountNumber', 'balance', 'changeBalance'];

  constructor(public financialService: FinancialService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  openPayDialog(id: string, patientUsername: string){
    this.dialog.open(InsertDepositDialogComponent, {data: {id : id, patientUsername: patientUsername}})
      .afterClosed().subscribe(res => {
        if (res){
          this.getAllAccounts();
        }
      })
  }

  private getAllAccounts(){
    this.financialService.getAllAccounts().subscribe(res => {
      let temp: any;
      temp = res;
      this.accounts = temp.accounts;
    })
  }

}
