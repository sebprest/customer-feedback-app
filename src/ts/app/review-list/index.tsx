import React from "react";
import { connect } from "react-redux";

import { ReviewsState } from "^/common/types";
import { StoreState } from "^/store/types";
import Review from "./review";

interface StateProps {
  reviews: ReviewsState;
}

type Props = StateProps;

export const ReviewList: React.FunctionComponent<Props> = React.memo(
  (props) => (
    <div className="review-list">
      {props.reviews.map((review, index) => (
        <Review review={review} key={index} />
      ))}
    </div>
  )
);

const mapStateToProps = ({ reviews }: StoreState): StateProps => {
  return {
    reviews,
  };
};

export default connect(mapStateToProps)(ReviewList);
