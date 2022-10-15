import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {
  doctors : any;

  displayedColumns: string[] = ['username', 'firstName', 'surname', 'medicalSpeciality'];

  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  private getAllDoctors(){
    this.doctorService.getAllDoctors().subscribe(res => {
      let temp: any;
      temp = res;
      this.doctors = temp.doctors;
    })
  }

}
