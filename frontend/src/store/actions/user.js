import { createAction } from "@reduxjs/toolkit";

const getUsers = createAction("user/getUser");
const setUsers = createAction("user/setUser");

const setLoading = createAction("user/setLoading");

const setSelectedRows = createAction("user/setSelectedRows");

const UserActions = { getUsers, setUsers, setLoading, setSelectedRows };

export default UserActions;
