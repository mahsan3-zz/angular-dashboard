import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeContainerComponent} from "./containers/welcome-container/welcome-container.component";

const routes: Routes = [{
  path: 'welcome-page',
  component: WelcomeContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomePageRoutingModule { }
