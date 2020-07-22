import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModuleModule} from "./material-module/material-module.module";
import { WelcomePageModule } from './welcome-page/welcome-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    WelcomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
