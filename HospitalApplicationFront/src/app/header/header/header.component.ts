import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role = "";
  currentUserId = "";

  constructor() { }

  ngOnInit(): void { 
    this.role = localStorage.getItem('role') ?? "";
    console.log(this.role)
    this.currentUserId = localStorage.getItem('id') ?? "";
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    window.location.reload();
  }

}
