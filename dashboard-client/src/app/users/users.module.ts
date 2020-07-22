import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './containers/users-container/users-container.component';


@NgModule({
  declarations: [UsersContainerComponent],
  imports: [
    UsersRoutingModule
  ]
})
export class UsersModule { }
