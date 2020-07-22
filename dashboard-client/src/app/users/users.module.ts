import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import {MaterialModule} from "../material-module/material.module";


@NgModule({
  declarations: [UsersContainerComponent],
  imports: [
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
