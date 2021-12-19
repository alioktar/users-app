import { createReducer } from "@reduxjs/toolkit";

import UserActions from "../actions/user";

const initialState = { users: [], selectedRows: [], loading: false };

const UserReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(UserActions.setUsers, (state, action) => {
      state.users = action.payload;
    })
    .addCase(UserActions.setLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(UserActions.setSelectedRows, (state, action) => {
      state.selectedRows = action.payload;
    })
);
export default UserReducer;
