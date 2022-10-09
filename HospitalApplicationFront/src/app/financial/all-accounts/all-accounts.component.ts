import { Component, OnInit } from '@angular/core';
import { FinancialService } from 'src/app/services/financial.service';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {
  accounts : any;

  displayedColumns: string[] = ['patientUsername', 'accountNumber', 'balance'];

  constructor(public financialService: FinancialService) { }

  ngOnInit(): void {
    this.financialService.getAllAccounts().subscribe(res => {
      let temp: any;
      temp = res;
      this.accounts = temp.accounts;
    })
  }

}
