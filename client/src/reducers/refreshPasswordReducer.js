import ACTION from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  user: null,
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
        user: action.user,
      };
    }
    case ACTION.REFRESH_PASSWORD_ERROR: {
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
