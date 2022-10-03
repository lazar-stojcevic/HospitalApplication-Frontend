import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinancialService } from 'src/app/services/financial.service';

@Component({
  selector: 'app-patient-account',
  templateUrl: './patient-account.component.html',
  styleUrls: ['./patient-account.component.css']
})
export class PatientAccountComponent implements OnInit {
  account: any;
  routeId = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private financialService: FinancialService) {
      console.log(this.routeId);
      console.log(this.route.snapshot.paramMap.get('id'));
      this.account = {
        id: '',
        accountNumber: '',
        balance: 0,
        patientId: '' 
      }
     }

  ngOnInit(): void {
    if (this.routeId != null) {
      this.financialService.getOneAccount(this.routeId).subscribe(res => {
        this.account = res;
      })
    }
  }

  get isBalanceNegative(){
    return this.account.balance < 0;
  }

}
