import React from "react";

import {
  MAXIMUM_REVIEW_RATING,
  MINIMUM_REVIEW_RATING,
  REVIEW_FORM_FIELD_IDS,
} from "./constants";
import { FormState } from "./types";

type Props = {
  addReview: (event: React.FormEvent<HTMLFormElement>) => void;
  updateFormState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formState: FormState;
};

export const ReviewFormFields: React.FunctionComponent<Props> = React.memo(
  (props) => {
    const { name, email, rating, comment } = props.formState;

    return (
      <form className="review-form" onSubmit={props.addReview}>
        <label htmlFor={REVIEW_FORM_FIELD_IDS.name}>Name</label>
        <input
          id={REVIEW_FORM_FIELD_IDS.name}
          type="text"
          name="name"
          value={name}
          onChange={props.updateFormState}
          required
        />
        <label htmlFor={REVIEW_FORM_FIELD_IDS.email}>Email</label>
        <input
          id={REVIEW_FORM_FIELD_IDS.email}
          type="text"
          name="email"
          value={email}
          onChange={props.updateFormState}
          required
        />
        <label htmlFor={REVIEW_FORM_FIELD_IDS.rating}>Rating</label>
        <input
          type="number"
          id={REVIEW_FORM_FIELD_IDS.rating}
          name="rating"
          value={rating}
          onChange={props.updateFormState}
          required
          min={MINIMUM_REVIEW_RATING}
          max={MAXIMUM_REVIEW_RATING}
        />
        <label htmlFor={REVIEW_FORM_FIELD_IDS.comment}>Comment</label>
        <input
          id={REVIEW_FORM_FIELD_IDS.comment}
          name="comment"
          value={comment}
          onChange={props.updateFormState}
          required
        />
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
);

export default ReviewFormFields;
