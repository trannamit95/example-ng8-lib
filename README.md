# ExampleNg8LibModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

# Setup

- Add ExampleNg8LibModule module as dependency :

  ```
  npm install --save example-ng8-lib
  ```
  
- Import ExampleNg8LibModule:

  ```
  //...
  import { ExampleNg8LibModule } from 'example-ng8-lib';
  
  @NgModule({
    imports: [
      ExampleNg8LibModule,
    // ...
  });
  ```

# Usage

## HeaderComponent
```
<nam-header></nam-header>
```
Inputs:
- `[logo]`

  Set logo url 
- `[avatar]`

  Set avatar url  
- `[menus]`

  Set menu list.

  Example:
  ```
  [
    {name: 'Home', url: '/'},
    {name: 'About Us', url: '/about'}
  ]
  ```

## FooterComponent
```
<nam-footer></nam-footer>
```

## SideMenuComponent
```
<nam-aside-menu></nam-aside-menu>
```
Input:
- `[menus]`

  Set menu list.

  Example:
  ```
  [
    {name: 'Home', url: '/'},
    {name: 'About Us', url: '/about'}
  ]
  ```

## LoginComponent
```
<nam-login></nam-login>
```

# Example

```
// Component code
//...
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: `
    <nam-header [logo]="logo" [avatar]="avatar" [menus]="headerMenus"></nam-header>
    <div class="row">
      <div class="col-md-2">
        <nam-aside-menu [menus]="sideMenus"></nam-aside-menu>
      </div>
      <div class="col-md-10 pt-5">
        <nam-login></nam-login>
      </div>
    </div>
    <nam-footer></nam-footer>
  `
})
 
export class AppHomeComponent {
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
```

# Demo
#### https://github.com/trannamit95/test-ng-lib