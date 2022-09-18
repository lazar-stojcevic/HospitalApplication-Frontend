import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  doctors : any;
  terms : any;
  date: Date;
  doctorId: string | undefined;
  length: string;
  maxDate: Date;
  selectedTerm: any;

  dateForm = new FormControl('', [Validators.required]);
  termForm = new FormControl('', [Validators.required]);
  doctorForm = new FormControl('', [Validators.required]);

  constructor(
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    public dialogRef: MatDialogRef<NewAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public userId: string,
  ) {
    this.date = new Date();
    this.maxDate = new Date(); 
    this.length = '10';
    this.doctors = [];
    this.terms = [];
  }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(res => {
      this.doctors = res;
    });
  }

  getTerms(){
    const userId = localStorage.getItem('id')
    this.appointmentService.getFreeTerms(userId!, this.doctorId!, this.date.toISOString(), this.length)
      .subscribe(res => {
        this.terms = res;
        this.selectedTerm = undefined;
      });
  }

  register(){
    const userId = localStorage.getItem('id');
    this.appointmentService.createNewAppointment(
      userId!, 
      this.doctorId!, 
      this.selectedTerm.startTime, 
      this.selectedTerm.endTime).subscribe(res => {
        this.dialogRef.close({saved: true});
      });
  }

}
