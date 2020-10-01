jest.mock("^/app/review-list/review", () => (props: unknown) => (
  <div {...props}>Review</div>
));

import React from "react";
import renderer from "react-test-renderer";

import { FAKE_REVIEW } from "^/__tests__/__helpers__/fake-review";
import { ReviewList } from "^/app/review-list";

describe("ReviewList", () => {
  it("should render a review component for each review provided", () => {
    const reviewForm = renderer.create(<ReviewList reviews={[FAKE_REVIEW]} />);

    expect(reviewForm).toMatchSnapshot();
  });
});
