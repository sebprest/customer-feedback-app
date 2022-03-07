import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { REVIEW_FORM_FIELD_IDS } from "^/app/review-form/constants";

import { ReviewFormFields } from "^/app/review-form/review-form-fields";
import { FAKE_REVIEW } from "^/__tests__/__helpers__/fake-review";

describe("ReviewFormFields", () => {
  const commonProps = {
    addReview: jest.fn(),
    updateFormState: jest.fn(),
    formState: FAKE_REVIEW,
  };
  it("should render the fields for the review form", () => {
    const reviewFormFields = renderer.create(
      <ReviewFormFields {...commonProps} />
    );
    expect(reviewFormFields).toMatchSnapshot();
  });

  it("should call the addReview action when the form is submitted", () => {
    const addReview = jest.fn().mockReturnValue(Promise.resolve());
    const reviewFormFields = mount(
      <ReviewFormFields {...commonProps} addReview={addReview} />
    );
    reviewFormFields.find(".review-form").simulate("submit");
    expect(addReview).toHaveBeenCalledTimes(1);
  });

  it("should call the updateFormState action when a field is updated", () => {
    const updateFormState = jest.fn().mockReturnValue(Promise.resolve());
    const reviewFormFields = mount(
      <ReviewFormFields {...commonProps} updateFormState={updateFormState} />
    );
    reviewFormFields.find(`#${REVIEW_FORM_FIELD_IDS.name}`).simulate("change");
    expect(updateFormState).toHaveBeenCalledTimes(1);
  });
});
