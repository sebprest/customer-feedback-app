import React from "react";
import renderer from "react-test-renderer";

import { FAKE_REVIEW } from "^/__tests__/__helpers__/fake-review";
import { Review } from "^/app/review-list/review";

describe("Review", () => {
  it("should render the details for the provided review ", () => {
    const reviewForm = renderer.create(<Review review={FAKE_REVIEW} />);

    expect(reviewForm).toMatchSnapshot();
  });
});
