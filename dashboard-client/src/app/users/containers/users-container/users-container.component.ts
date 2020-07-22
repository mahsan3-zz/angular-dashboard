import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subscription} from "rxjs";
import {CoreState} from "../../../core/store";
import {Store} from "@ngrx/store";
import {LoadUserStats} from "../../store/users.actions";

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit, OnDestroy {
  tiles: Tile[];
  breakPointSub$: Subscription;

  constructor(breakpointObserver: BreakpointObserver, private store: Store<CoreState>) {

    this.breakPointSub$ = breakpointObserver.observe('(max-width: 650px)').subscribe(v => {
      if(v.matches) { // less than 650px
        this.tiles = [
          {cols: 3, rows: 1},
          {cols: 3, rows: 1},
          {cols: 3, rows: 1}
        ];
      }else { // greater than 650px
        this.tiles = [
          {cols: 3, rows: 1},
          {cols: 1, rows: 1},
          {cols: 2, rows: 1}
        ];
      }
      console.log('[x] Breakpoint Observable');
      console.log(v);
    });

  }

  ngOnInit(): void {
    this.store.dispatch(new LoadUserStats());
  }

  ngOnDestroy(): void {
    this.breakPointSub$.unsubscribe();
  }

}
