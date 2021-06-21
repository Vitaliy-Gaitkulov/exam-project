import ACTION from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.REFRESH_PASSWORD_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.REFRESH_PASSWORD_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data,
      };
    }
    case ACTION.REFRESH_PASSWORD_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case ACTION.UPDATE_PASSWORD_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.UPDATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data,
      };
    }
    case ACTION.UPDATE_PASSWORD_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
