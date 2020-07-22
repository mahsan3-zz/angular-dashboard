import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {LoadUserStatsFail, LoadUserStatsSuccess, UserTypes} from "./users.actions";
import {mergeMap} from "rxjs/operators";
import {UsersServiceService} from "../services/users-service.service";
import {map,catchError} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersSrv: UsersServiceService) {}

  @Effect()
  loadUserStats = this.actions$.pipe(
    ofType(UserTypes.LoadUserStats),
    mergeMap((action: any) => this.usersSrv.getUserStats().pipe(
      map((data: any) => (new LoadUserStatsSuccess(data))),
      catchError(err => of(new LoadUserStatsFail()))
    ))
  );
}
