import axios from "axios";

export const GET_ALL_TRIPS_REQUEST = "GET_ALL_TRIPS_REQUEST";
export const GET_ALL_TRIPS_SUCCESS = "GET_ALL_TRIPS_SUCCESS";
export const GET_ALL_TRIPS_ERROR = "GET_ALL_TRIPS_ERROR";

export const ADD_TRIP_REQUEST = "ADD_TRIP_REQUEST";
export const ADD_TRIP_SUCCESS = "ADD_TRIP_SUCCESS";
export const ADD_TRIP_ERROR = "ADD_TRIP_ERROR";

const getTripsSuccess = (payload) => ({
  type: GET_ALL_TRIPS_SUCCESS,
  payload,
});

const getTripsError = (payload) => ({
  type: GET_ALL_TRIPS_ERROR,
  payload,
});

const postTripSuccess = (payload) => ({
  type: ADD_TRIP_SUCCESS,
  payload,
});

const postTripError = (payload) => ({
  type: ADD_TRIP_ERROR,
  payload,
});

export const getAllTrips = () => (dispatch) => {
  dispatch({ type: GET_ALL_TRIPS_REQUEST });
  return axios
    .get("api/Trips/GetTrips")
    .then((res) => {
      const response = res.data;
      dispatch(getTripsSuccess(response));
    })
    .catch((error) => {
      dispatch(getTripsError("Something went wrong!"));
      return Promise.reject({});
    });
};

export const postTrip = (tripObject) => (dispatch) => {
  dispatch({ type: ADD_TRIP_REQUEST });
  return axios
    .post("api/Trips/AddTrip", tripObject)
    .then((res) => {
      const response = res.data;
      dispatch(postTripSuccess(response));
    })
    .catch((error) => {
      dispatch(postTripError("Something went wrong!"));
      return Promise.reject({});
    });
};
