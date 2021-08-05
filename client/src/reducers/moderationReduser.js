import ACTION from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  offers: null,
  paginateCount: 1
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_ALL_OFFERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.GET_ALL_OFFERS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        offers: action.data.data.offers,
        paginateCount: action.data.data.paginateCount,
      };
    }
    case ACTION.GET_ALL_OFFERS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}
