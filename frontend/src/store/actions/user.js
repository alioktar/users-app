import { createAction } from "@reduxjs/toolkit";

const getUsers = createAction("user/getUser");
const setUsers = createAction("user/setUser");
const setSelectedUser = createAction("user/setSelectedUser");

const setLoading = createAction("user/setLoading");
const showSaveModal = createAction("user/showSaveModal");

const rowsSelectable = createAction("user/rowsSelectable");
const setSelectedRows = createAction("user/setSelectedRows");
const clearSelectedRows = createAction("user/clearSelectedRows");

const UserActions = {
  getUsers,
  setUsers,
  setLoading,
  showSaveModal,
  rowsSelectable,
  setSelectedRows,
  setSelectedUser,
  clearSelectedRows,
};

export default UserActions;
