import {Action} from "@ngrx/store";
import {IUserStats} from "../interfaces/user-stats.interface";

export enum UserTypes {
    LoadUserStats = '[User Stats] Load',
    LoadUserStatsSuccess = '[User Stats] Load Succcess',
    LoadUserStatsFail = '[User Stats] Load Fail'
}

export class LoadUserStats implements Action {
  readonly type = UserTypes.LoadUserStats;
}
export class LoadUserStatsSuccess implements Action {
  readonly type = UserTypes.LoadUserStatsSuccess;

  constructor(public payload: IUserStats) {}
}
export class LoadUserStatsFail implements Action {
  readonly type = UserTypes.LoadUserStatsFail;
}

export type UsersActions =
  | LoadUserStats
  | LoadUserStatsSuccess
  | LoadUserStatsFail;
