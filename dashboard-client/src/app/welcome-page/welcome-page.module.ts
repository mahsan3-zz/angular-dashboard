import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomeContainerComponent } from './containers/welcome-container/welcome-container.component';


@NgModule({
  declarations: [WelcomeContainerComponent],
  imports: [
    CommonModule,
    WelcomePageRoutingModule
  ]
})
export class WelcomePageModule { }
