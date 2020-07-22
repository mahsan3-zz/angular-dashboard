import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import {MaterialModule} from "../material-module/material.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [UsersContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
