import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  avatar = 'http://www.myiconfinder.com/uploads/iconsets/256-256-6a9a5acd215316d5cd242192f19ba1ca-user.png';
  logo = 'http://getbootstrap.com/docs/4.3/assets/brand/bootstrap-social.png';
  headerMenus = [
    {name: 'Home', url: '/'},
    {name: 'About Us', url: '/about'},
    {name: 'Products', url: '/product'},
    {name: 'Contact', url: '/contact'}
  ];
  sideMenus = [
    {name: 'Home', url: '/'},
    {name: 'About Us', url: '/about'},
    {name: 'Products', url: '/product'},
    {name: 'Contact', url: '/contact'}
  ];
}
