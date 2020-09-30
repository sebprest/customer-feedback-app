import { Review } from "^/common/types";
import { AddReviewAction } from "./types";

export const ADD_REVIEW = "ADD_REVIEW";
export function addReview(newReview: Review): AddReviewAction {
  return {
    type: ADD_REVIEW,
    payload: newReview,
  };
}
