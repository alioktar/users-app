import { createAction } from "@reduxjs/toolkit";

const getUsers = createAction("user/getUser");
const setUsers = createAction("user/setUser");

const setLoading = createAction("user/setLoading");

const UserActions = { getUsers, setUsers, setLoading };

export default UserActions;
