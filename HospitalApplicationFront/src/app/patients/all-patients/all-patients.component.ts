import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {
  patients : any;

  displayedColumns: string[] = ['username', 'firstName', 'surname', 'personalNumber', 'blockUser'];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  public blockUser(patientId: string){
    this.patientService.blockPatient(patientId).subscribe(() => this.getAllPatients());
  }

  public unblockUser(patientId: string){
    this.patientService.unblockPatient(patientId).subscribe(() => this.getAllPatients());
  }

  private getAllPatients(){
    this.patientService.getAllPatient().subscribe(res => {
      let temp: any;
      temp = res;
      this.patients = temp.patients;
    })
  }

}
