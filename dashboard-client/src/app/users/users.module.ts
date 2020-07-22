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


@NgModule({
  declarations: [UsersContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    StoreModule.forFeature(SLICE_ID_USERS, usersReducers),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersModule { }
