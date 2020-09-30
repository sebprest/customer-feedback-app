import React, { useState } from "react";

import { Review } from "^/common/types";
import { REVIEW_FORM_FIELD_IDS } from "./constants";

type Props = {
  addReview: (newReview: Review) => void;
};

export const ReviewFormFields: React.FunctionComponent<Props> = React.memo(
  (props) => {
    const defaultValues = { name: "", email: "", rating: 0, comment: "" };
    const [values, setValues] = useState(defaultValues);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;

      setValues((values) => ({ ...values, [targetName]: targetValue }));
    };

    const onAddReview = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      props.addReview(values);
      setValues(() => defaultValues);
    };

    return (
      <form className="review-form" onSubmit={onAddReview}>
        <label htmlFor={REVIEW_FORM_FIELD_IDS.name}>Name</label>
        <input
          id={REVIEW_FORM_FIELD_IDS.name}
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
        <label htmlFor={REVIEW_FORM_FIELD_IDS.email}>Email</label>
        <input
          id={REVIEW_FORM_FIELD_IDS.email}
          type="text"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <label htmlFor={REVIEW_FORM_FIELD_IDS.rating}>Rating</label>
        <input
          id={REVIEW_FORM_FIELD_IDS.rating}
          name="rating"
          value={values.rating}
          onChange={handleInputChange}
        />
        <label htmlFor={REVIEW_FORM_FIELD_IDS.comment}>Comment</label>
        <input
          id={REVIEW_FORM_FIELD_IDS.comment}
          name="comment"
          value={values.comment}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
);

export default ReviewFormFields;
