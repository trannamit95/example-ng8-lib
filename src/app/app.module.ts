import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleNg8LibModule } from 'example-ng8-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleNg8LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
