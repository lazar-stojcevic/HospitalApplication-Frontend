import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseExportService {

  constructor(private http: HttpClient, private router: Router) { }

  getDatabaseJSON() {
    return this.http.get(environment.serverUrl + 'export');
  }

  getDatabaseJSONPseudonymization() {
    return this.http.get(environment.serverUrl + 'export-pseudonymization');
  }
}
