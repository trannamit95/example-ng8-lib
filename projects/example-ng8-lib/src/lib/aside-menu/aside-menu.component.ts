import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nam-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {
  @Input() menus: any = [];

  constructor() { }

  ngOnInit() {
  }

}
