import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {CoreEffectsModule} from "./store/core.effects.module";

@NgModule({
  declarations: [],
  imports: [
    CoreEffectsModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'Residential Reviews',
      maxAge: 50, // Retain last 50 states
      logOnly: environment.production
    }): []
  ]
})
export class CoreModule { }
