import {
  GET_ALL_TRIPS_REQUEST,
  GET_ALL_TRIPS_SUCCESS,
  GET_ALL_TRIPS_ERROR,
  ADD_TRIP_REQUEST,
  ADD_TRIP_SUCCESS,
  ADD_TRIP_ERROR,
} from "../actions/tripActions";

const INITIAL_STATE = {
  loading: false,
  hasError: false,
  error: null,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TRIPS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_TRIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        data: action.payload,
      };

    case GET_ALL_TRIPS_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.payload,
      };

    case ADD_TRIP_REQUEST:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.payload,
      };

    case ADD_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.payload,
      };

    case ADD_TRIP_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
