jest.mock("^/app/review-form/review-form-fields", () => (props: unknown) => (
  <div {...props}>ReviewFormFields</div>
));

import React from "react";
import renderer from "react-test-renderer";

import { ReviewForm } from "^/app/review-form";

describe("ReviewForm", () => {
  it("should render the review form fields with the addReview action passed to it", () => {
    const reviewForm = renderer.create(<ReviewForm addReview={jest.fn()} />);

    expect(reviewForm).toMatchSnapshot();
  });
});
