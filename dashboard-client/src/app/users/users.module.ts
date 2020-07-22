import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import {MaterialModule} from "../material-module/material.module";
import {CommonModule} from "@angular/common";
import { StoreModule } from '@ngrx/store';
import {SLICE_ID_USERS} from "./store";
import {usersReducers} from "./store/users.reducers";
import {EffectsModule} from "@ngrx/effects";
import {UsersEffects} from "./store/users.effects";
import { NewRegistrationsComponent } from './components/new-registrations/new-registrations.component';
import { NewContentComponent } from './components/new-content/new-content.component';
import { AverageSessionComponent } from './components/average-session/average-session.component';


@NgModule({
  declarations: [UsersContainerComponent, NewRegistrationsComponent, NewContentComponent, AverageSessionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    StoreModule.forFeature(SLICE_ID_USERS, usersReducers),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersModule { }
