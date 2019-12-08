import { combineReducers } from "redux";

import themeReducer from "./reducers/themeReducer";
import booksReducer from "./reducers/booksReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  books: booksReducer
});

export default rootReducer;
