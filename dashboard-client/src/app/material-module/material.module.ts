import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';


@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    LayoutModule
  ]
})
export class MaterialModule { }
