import { FAKE_REVIEW } from "^/__tests__/__helpers__/fake-review";
import { review } from "^/app/review-form/reducers";
import { ADD_REVIEW } from "^/app/review-form/actions";

describe("ReviewFormReducers", () => {
  it("should set the full payload as the state if there are no reviews", () => {
    const output = review(undefined, {
      type: ADD_REVIEW,
      payload: FAKE_REVIEW,
    });
    expect(output.length).toEqual(1);
    expect(output).toEqual([FAKE_REVIEW]);
  });

  it("should add the new review to the state if there are existing reviews", () => {
    const output = review([FAKE_REVIEW], {
      type: ADD_REVIEW,
      payload: FAKE_REVIEW,
    });
    expect(output.length).toEqual(2);
    expect(output).toEqual([FAKE_REVIEW, FAKE_REVIEW]);
  });
});
