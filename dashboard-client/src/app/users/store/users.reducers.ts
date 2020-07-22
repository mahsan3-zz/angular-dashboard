export interface UsersState {
  numberOfLogins: number;
}

const initialState: UsersState = {
  numberOfLogins: 666
};

export function usersReducers(state = initialState, action: any): UsersState {

  switch (action.type) {
    default:
      return state;
  }

}
