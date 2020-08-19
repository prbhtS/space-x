import {
  FILTER_POST,
  FETCH_ALL
} from './../actions/actions';

const initialState = {
  data: [],
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL:
      return ({
        ...state,
        data: action.payload,
        loading: false
      });

    case FILTER_POST:
      return ({
        ...state,
        data: action.payload,
        loading: false,
      })

    default:
      return state;
  }
}

