import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/http/restController';

export function * moderationSaga (action) {
  yield put({ type: ACTION.GET_ALL_OFFERS_REQUEST });
  try {
    const { data } = yield restController.getAllOffers(action.data);
    yield put({ type: ACTION.GET_ALL_OFFERS_SUCCESS, data });
  } catch (err) {
    yield put({ type: ACTION.GET_ALL_OFFERS_ERROR, error: err.response  });
  }
}
