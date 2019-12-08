import {
  FETCH_BOOKS_STARTED,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR
} from "../types";

const initialState = {
  isLoading: true,
  books: [],
  error: null
};

export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BOOKS_STARTED: {
      return { ...state, isLoading: true };
    }
    case FETCH_BOOKS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        books: [...state.books, ...action.payload]
      };
    }
    case FETCH_BOOKS_ERROR: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
