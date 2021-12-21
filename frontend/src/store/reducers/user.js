import { createReducer } from "@reduxjs/toolkit";

import UserActions from "../actions/user";

const initialState = {
  users: [],
  loading: false,
  selectedRows: [],
  selectedUser: null,
  showSaveModal: false,
  rowsSelectable: false,
  clearSelectedRows: false,
};

const UserReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(UserActions.setUsers, (state, action) => {
      state.users = action.payload;
    })
    .addCase(UserActions.setLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(UserActions.showSaveModal, (state, action) => {
      state.showSaveModal = action.payload;
    })
    .addCase(UserActions.rowsSelectable, (state, action) => {
      state.rowsSelectable = action.payload;
    })
    .addCase(UserActions.setSelectedRows, (state, action) => {
      state.selectedRows = action.payload;
    })
    .addCase(UserActions.setSelectedUser, (state, action) => {
      state.selectedUser = action.payload;
    })
    .addCase(UserActions.clearSelectedRows, (state, action) => {
      state.clearSelectedRows = action.payload;
    })
);
export default UserReducer;
