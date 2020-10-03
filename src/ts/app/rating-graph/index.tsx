import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";
import React from "react";
import { connect } from "react-redux";

import { ReviewsState } from "^/common/types";
import { StoreState } from "^/store/types";

interface StateProps {
  reviews: ReviewsState;
}

type Props = StateProps;

export const RatingGraph: React.FunctionComponent<Props> = React.memo(
  (props) => {
    return (
      <div className="rating-graph">
        <ResponsiveContainer>
          <LineChart data={props.reviews}>
            <YAxis />
            <Line type="monotone" dataKey={"rating"} animationDuration={0} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
);

const mapStateToProps = ({ reviews }: StoreState): StateProps => {
  return {
    reviews,
  };
};

export default connect(mapStateToProps)(RatingGraph);
