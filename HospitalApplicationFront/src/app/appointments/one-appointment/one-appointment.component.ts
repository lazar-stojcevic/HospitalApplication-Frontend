import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-one-appointment',
  templateUrl: './one-appointment.component.html',
  styleUrls: ['./one-appointment.component.css']
})
export class OneAppointmentComponent implements OnInit {
  appointment: any;
  report: string;
  price: number;

  constructor(
    private route: ActivatedRoute, 
    private appointmentService: AppointmentService, 
    public router: Router) { 
      this.report = '';
      this.price = 0;
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.appointmentService.getOneAppointments(id).subscribe(res => {
        this.appointment = res;
      })
    }
  }

  finishAppointment(){
    this.appointmentService.finishAppointment(this.appointment.id, this.price, this.report).subscribe(() => {
      this.router.navigate(['doctor-appointments']);
    });
  }

}
