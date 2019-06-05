import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ExampleNg8LibComponent } from './example-ng8-lib.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';

@NgModule({
  declarations: [ExampleNg8LibComponent, HeaderComponent, FooterComponent, LoginComponent, AsideMenuComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ExampleNg8LibComponent, HeaderComponent, FooterComponent, LoginComponent, AsideMenuComponent]
})
export class ExampleNg8LibModule { }
