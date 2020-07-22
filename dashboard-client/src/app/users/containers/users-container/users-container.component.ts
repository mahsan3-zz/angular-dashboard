import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Observable, Subscription} from "rxjs";
import {CoreState} from "../../../core/store";
import {select, Store} from "@ngrx/store";
import {LoadUserStats} from "../../store/users.actions";
import {getAverageSession, getNewContentUploaded, getRegistrationsToday, isLoading} from "../../store";

export interface Tile {
  cols: number;
  rows: number;
  component: string;
}

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit, OnDestroy {
  tiles: Tile[];
  breakPointSub$: Subscription;
  registrationsToday$: Observable<number>;
  newContentUploaded$: Observable<number>;
  averageSession$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver, private store: Store<CoreState>) {

    this.registrationsToday$ = this.store.pipe(select(getRegistrationsToday));
    this.newContentUploaded$ = this.store.pipe(select(getNewContentUploaded));
    this.averageSession$ = this.store.pipe(select(getAverageSession));
    this.isLoading$ = this.store.pipe(select(isLoading));

    this.breakPointSub$ = breakpointObserver.observe('(max-width: 650px)').subscribe(v => {
      if(v.matches) { // less than 650px
        this.tiles = [
          {cols: 3, rows: 1, component: 'registrations'},
          {cols: 3, rows: 1, component: 'new-content'},
          {cols: 3, rows: 1, component: 'average-session'}
        ];
      }else { // greater than 650px
        this.tiles = [
          {cols: 3, rows: 1, component: 'registrations'},
          {cols: 1, rows: 1, component: 'new-content'},
          {cols: 2, rows: 1, component: 'average-session'}
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
