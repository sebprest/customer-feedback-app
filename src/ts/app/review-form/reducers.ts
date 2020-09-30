import { Review, ReviewsState } from "^/common/types";
import { ADD_REVIEW } from "./actions";
import { AddReviewAction } from "./types";

export function review(
  state: Review[] = [],
  action: AddReviewAction
): ReviewsState {
  switch (action.type) {
    case ADD_REVIEW:
      return [...state, action.payload];
    default:
      return state;
  }
}
