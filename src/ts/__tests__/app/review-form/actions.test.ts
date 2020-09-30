import { FAKE_REVIEW } from "^/__tests__/__helpers__/fake-review";
import { addReview } from "^/app/review-form/actions";
import { ADD_REVIEW } from "^/app/review-form/actions";

describe("ReviewFormActions", () => {
  it("should return the review data", () => {
    const output = addReview(FAKE_REVIEW);
    expect(output).toEqual({ type: ADD_REVIEW, payload: FAKE_REVIEW });
  });
});
