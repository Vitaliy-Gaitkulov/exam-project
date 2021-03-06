import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import history from '../browserHistory';
import {refreshPassword, updatePassword} from '../api/http/restController'
import * as Api from '../api/http';

export function * refreshPasswordSaga (action) {
  yield put({ type: ACTION.REFRESH_PASSWORD_REQUEST });
  try {
    const {data} = yield refreshPassword(action.data);
    yield put({ type: ACTION.REFRESH_PASSWORD_SUCCESS, data: data });
  } catch (err) {
    yield put({ type: ACTION.REFRESH_PASSWORD_ERROR, error: err.response });
  }
}

export function * updatePasswordSaga (action) {
  yield put({ type: ACTION.UPDATE_PASSWORD_REQUEST });
  try {
    const { data } = yield updatePassword({hash: action.data});
    yield put({ type: ACTION.UPDATE_PASSWORD_SUCCESS, data });
  } catch (err) {
    yield put({ type: ACTION.UPDATE_PASSWORD_ERROR, error: err.response });
  }
}

export function * loginSaga (action) {
  yield put({ type: ACTION.AUTH_ACTION_REQUEST });
  try {
    const {
      data: {
        data: { user },
      },
    } = yield Api.auth.login(action.data);
    history.replace('/');
    yield put({ type: ACTION.AUTH_ACTION_SUCCESS, user });
  } catch (err) {
    yield put({ type: ACTION.AUTH_ACTION_ERROR, error: err.response });
  }
}

export function * registerSaga (action) {
  yield put({ type: ACTION.AUTH_ACTION_REQUEST });
  try {
    const {
      data: {
        data: { user },
      },
    } = yield Api.auth.signUp(action.data);
    history.replace('/');
    yield put({ type: ACTION.AUTH_ACTION_SUCCESS, user });
  } catch (e) {
    yield put({ type: ACTION.AUTH_ACTION_ERROR, error: e.response });
  }
}

export function * refreshSaga (action) {
  yield put({ type: ACTION.AUTH_ACTION_REQUEST });
  try {
    const {
      data: {
        data: { user },
      },
    } = yield Api.auth.refresh(action.data);
    yield put({ type: ACTION.AUTH_ACTION_SUCCESS, user });
  } catch (e) {
    yield put({ type: ACTION.AUTH_ACTION_ERROR, error: e.response });
  }
}

export function * logoutSaga (action) {
  yield Api.auth.logout();
  yield put({ type: ACTION.CLEAR_STORE });
}
