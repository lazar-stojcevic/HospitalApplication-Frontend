import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-one-appointment',
  templateUrl: './one-appointment.component.html',
  styleUrls: ['./one-appointment.component.css']
})
export class OneAppointmentComponent implements OnInit {
  appointment: any;
  report: string;

  constructor(
    private route: ActivatedRoute, 
    private appointmentService: AppointmentService) { 
      this.report = '';
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.appointmentService.getOneAppointments(id).subscribe(res => {
        this.appointment = res;
      })
    }
  }

}
