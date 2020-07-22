import {UsersActions, UserTypes} from "./users.actions";

export interface UsersState {
  registrationsToday: number;
  newContentUploaded: number;
  averageSession: string;
  isLoading: boolean;
}

const initialState: UsersState = {
  registrationsToday: 0,
  newContentUploaded: 0,
  averageSession: "",
  isLoading: true
};

export function usersReducers(state = initialState, action: UsersActions): UsersState {

  switch (action.type) {

    case UserTypes.LoadUserStats:
      return {
        ...state,
        isLoading: true
      };

    case UserTypes.LoadUserStatsSuccess:
      return {
        ...state,
        registrationsToday: action.payload.registrationsToday,
        newContentUploaded: action.payload.newContentUploaded,
        averageSession: action.payload.averageSession,
        isLoading: false
      };

    case UserTypes.LoadUserStatsFail:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }

}
