import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {
  doctors : any;
  role = "";

  displayedColumns: string[] = ['username', 'firstName', 'surname', 'medicalSpeciality'];
  displayedColumnsForDoctor: string[] = ['username', 'firstName', 'surname', 'medicalSpeciality', 'deactiveDoctor'];

  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role') ?? "";
    this.getAllDoctors();
  }

  private getAllDoctors(){
    this.doctorService.getAllDoctors().subscribe(res => {
      let temp: any;
      temp = res;
      this.doctors = temp.doctors;
    })
  }

  public blockUser(doctorId: string){
    this.doctorService.blockDoctor(doctorId).subscribe(() => this.getAllDoctors());
  }

  public unblockUser(doctorId: string){
    this.doctorService.unblockDoctor(doctorId).subscribe(() => this.getAllDoctors());
  }

}
