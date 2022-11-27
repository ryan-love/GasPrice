import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormGasPriceComponent } from './input-form-gas-price/input-form-gas-price.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormGasPriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
