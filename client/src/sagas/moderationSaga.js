import { put, select } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/http/restController';
import CONSTANTS from '../constants';

export function * moderationSaga (action) {
  yield put({ type: ACTION.GET_ALL_OFFERS_REQUEST });
  try {
    const { data } = yield restController.getAllOffers(action.data);
    yield put({ type: ACTION.GET_ALL_OFFERS_SUCCESS, data });
  } catch (err) {
    yield put({ type: ACTION.GET_ALL_OFFERS_ERROR, error: err.response  });
  }
}

export function * setOfferStatusModerationSaga (action) {
  yield put({ type: ACTION.SET_OFFER_STATUS_MODERATION_REQUEST});
  try {
    const { data } = yield restController.setOfferStatusModeration(action.data);
    const offers = yield select(state => state.contestByIdStore.offers);
    offers.forEach(offer => {if (data.status === CONSTANTS.OFFER_STATUS_PENDING) {
        if (data.id === offer.id) {
          offer.status = CONSTANTS.OFFER_STATUS_PENDING;
        }
      } else if (data.id === offer.id) {
        offer.status = CONSTANTS.OFFER_STATUS_BANNED;
      }
    });
    yield put({ type: ACTION.CHANGE_STORE_FOR_STATUS, data: offers });
  } catch (e) {
    yield put({ type: ACTION.SET_OFFER_STATUS_MODERATION_ERROR, error: e.response });
  }
}
