import React from "react";
import { connect } from "react-redux";

import { addReview } from "./actions";
import ReviewFormFields from "./review-form-fields";

type Props = {
  addReview: typeof addReview;
};

export const ReviewForm: React.FunctionComponent<Props> = React.memo(
  (props) => {
    return <ReviewFormFields addReview={props.addReview} />;
  }
);

export default connect(null, { addReview })(ReviewForm);
