import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material-module/material.module";
import { WelcomePageModule } from './welcome-page/welcome-page.module';
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    MaterialModule,
    WelcomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
