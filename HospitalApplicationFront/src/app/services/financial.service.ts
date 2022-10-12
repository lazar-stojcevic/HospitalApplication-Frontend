import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  constructor(private http: HttpClient, private router: Router) { }

  getOneAccount(id: string) {
    return this.http.get(environment.serverUrl + 'accounts/' + id);
  }

  getAllAccounts() {
    return this.http.get(environment.serverUrl + 'accounts/');
  }

  payDeposit(id: string, change: number) {
    return this.http.put(environment.serverUrl + 'account/change', {id: id, change: change});
  }
}
