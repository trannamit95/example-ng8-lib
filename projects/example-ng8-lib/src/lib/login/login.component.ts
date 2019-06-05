import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {
    username: null,
    password: null
  }

  constructor() { }

  ngOnInit() {
  }
}
