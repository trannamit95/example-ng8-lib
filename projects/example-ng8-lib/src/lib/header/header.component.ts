import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nam-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() menus: any = [];
  @Input() logo: any = [];
  @Input() avatar: any = [];
  
  constructor() { }

  ngOnInit() {
  }

}
