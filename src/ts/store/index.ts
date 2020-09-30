import { createStore, combineReducers } from "redux";

import { review } from "^/app/review-form/reducers";

const rootReducer = combineReducers({ review });

export const store = createStore(rootReducer);
