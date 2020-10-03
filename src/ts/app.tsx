import React from "react";

import ReviewForm from "^/app/review-form";
import ReviewList from "^/app/review-list";
import RatingGraph from "^/app/rating-graph";

const App: React.FunctionComponent = React.memo(() => (
  <div className="container">
    <div className="col col-4-md">
      <ReviewForm />
      <RatingGraph />
    </div>
    <div className="col col-8-md">
      <ReviewList />
    </div>
  </div>
));

export default App;
