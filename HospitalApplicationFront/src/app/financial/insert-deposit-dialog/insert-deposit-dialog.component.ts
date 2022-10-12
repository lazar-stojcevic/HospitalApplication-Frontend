import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinancialService } from 'src/app/services/financial.service';

@Component({
  selector: 'app-insert-deposit-dialog',
  templateUrl: './insert-deposit-dialog.component.html',
  styleUrls: ['./insert-deposit-dialog.component.css']
})
export class InsertDepositDialogComponent implements OnInit {
  value: number;

  constructor(public financialService: FinancialService,
    public dialogRef: MatDialogRef<InsertDepositDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string, patientUsername: string}) {
      this.value = 0;
     }

  ngOnInit(): void {
  }

  pay(){
    this.financialService.payDeposit(this.data.id, this.value).subscribe(() => {
      this.dialogRef.close(true);
    })
  }

  cancel(){
    this.dialogRef.close(false);
  }

}
