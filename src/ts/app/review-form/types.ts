import { Review } from "^/common/types";
import { ADD_REVIEW } from "./actions";

export type AddReviewAction = {
  type: typeof ADD_REVIEW;
  payload: Review;
};
