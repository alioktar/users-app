import { createReducer } from "@reduxjs/toolkit";

import UserActions from "../actions/user";

const initialState = { users: [], loading: false };

const UserReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(UserActions.setUsers, (state, action) => {
      state.users = action.payload;
    })
    .addCase(UserActions.setLoading, (state, action) => {
      state.loading = action.payload;
    })
);
export default UserReducer;
