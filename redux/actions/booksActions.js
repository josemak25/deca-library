import {
  FETCH_BOOKS_STARTED,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR
} from "../types";

import APP_ENV from "../../config";

const addBookStarted = () => ({ type: FETCH_BOOKS_STARTED });

const addBookSuccess = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: [books]
});

const addBookFailure = error => ({
  type: FETCH_BOOKS_ERROR,
  payload: { error }
});

export default getBooks = () => {
  return async dispatch => {
    dispatch(addBookStarted());

    try {
      const response = await fetch(
        `${APP_ENV.BOOK_BASE_URI}/zyTCAlFPjgYC?key=${APP_ENV.BOOK_SECRETE_KEY}`
      );
      const data = await response.json();

      dispatch(addBookSuccess(data));
    } catch (error) {
      dispatch(addBookFailure(error.message));
    }
  };
};
