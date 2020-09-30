import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { ReviewFormFields } from "^/app/review-form/review-form-fields";

describe("ReviewFormFields", () => {
  it("should render the fields for the review form", () => {
    const reviewFormFields = renderer.create(
      <ReviewFormFields addReview={jest.fn()} />
    );
    expect(reviewFormFields).toMatchSnapshot();
  });

  it("should call the addReview action when the form is submitted", () => {
    const addReview = jest.fn().mockReturnValue(Promise.resolve());
    const reviewFormFields = mount(<ReviewFormFields addReview={addReview} />);
    reviewFormFields.find(".review-form").simulate("submit");
    expect(addReview).toHaveBeenCalledTimes(1);
  });
});
