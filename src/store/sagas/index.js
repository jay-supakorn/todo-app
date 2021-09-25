import { takeEvery, all, call, put } from "redux-saga/effects";
import webAPI from "../../services";

function* callLoginAPI(action) {
  try {
    const response = yield call(webAPI.Core.login, action.payload);
    yield put({ type: "LOGIN_SUCCESS", payload: response.data.token });
  } catch (error) {
    console.log("error = ", error);
  }
}

function* actionWatcher() {
  yield takeEvery("LOGIN_SEND", callLoginAPI);
}

function* rootSaga() {
  yield all([actionWatcher()]);
}

export default rootSaga;
