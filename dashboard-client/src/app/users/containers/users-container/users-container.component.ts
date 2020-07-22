import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subscription} from "rxjs";

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

  constructor(breakpointObserver: BreakpointObserver) {
    this.breakPointSub$ = breakpointObserver.observe('(max-width: 650px)').subscribe(v => {
      if(v.matches) { // less than 650px
        this.tiles = [
          {cols: 3, rows: 1},
          {cols: 3, rows: 1},
          {cols: 3, rows: 1}
        ];
      }else {
        this.tiles = [
          {cols: 3, rows: 1},
          {cols: 1, rows: 1},
          {cols: 2, rows: 1}
        ];
      }
      console.log('[x] Breakpoint Observable');
      console.log(v);
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.breakPointSub$.unsubscribe();
  }

}
