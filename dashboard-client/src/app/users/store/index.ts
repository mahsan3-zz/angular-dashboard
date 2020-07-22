import {CoreState} from "../../core/store";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UsersState} from "./users.reducers";

export const SLICE_ID_USERS = 'users';

export interface UsersInfoState extends CoreState{
  SLICE_ID_USERS: UsersState
}

const getUserState = createFeatureSelector<UsersState>(SLICE_ID_USERS);

export const isLoading = createSelector(
  getUserState,
  state => state.isLoading
);

export const getRegistrationsToday = createSelector(
  getUserState,
  state => state.registrationsToday
);

export const getNewContentUploaded = createSelector(
  getUserState,
  state => state.newContentUploaded
);

export const getAverageSession = createSelector(
  getUserState,
  state => state.averageSession
);
