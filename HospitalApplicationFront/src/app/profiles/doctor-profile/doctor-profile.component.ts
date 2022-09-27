import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctor: any;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService) {
      this.doctor = {
        username: '', 
        firstname: '',
        surname: '', 
        personalNumber: '', 
        phoneNumber: '', 
        email: '',
        dateOfBirth: null,
        medicalSpeciality: 'Internists',
      }
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.doctorService.getOneDoctors(id).subscribe(res => {
        this.doctor = res;
      })
    }
  }

}
