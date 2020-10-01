import React from "react";

import { Review as TReview } from "^/common/types";

type Props = {
  review: TReview;
};

export const Review: React.FunctionComponent<Props> = React.memo((props) => (
  <div className="review">
    {props.review.name} ({props.review.email}) - Rating: {props.review.rating}:
    <div className="review-comment">{props.review.comment}</div>
  </div>
));

export default Review;
