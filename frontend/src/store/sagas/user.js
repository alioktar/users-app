import { all, call, put, takeLeading } from "redux-saga/effects";

import UserActions from "../actions/user";
import users from "../../assets/users.json";

function* getUsers(action) {
  try {
    yield put(UserActions.setLoading(true));
    yield put(UserActions.setUsers(users));
    yield put(UserActions.setLoading(false));
  } catch (error) {}
}

export default function* userSagas() {
  yield all([takeLeading(UserActions.getUsers.type, getUsers)]);
}
