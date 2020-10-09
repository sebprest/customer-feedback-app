import React, { useState } from "react";
import { connect } from "react-redux";

import { addReview } from "./actions";
import ReviewFormFields from "./review-form-fields";

type Props = {
  addReview: typeof addReview;
};

export const ReviewForm: React.FunctionComponent<Props> = React.memo(
  (props) => {
    const defaultValues = { name: "", email: "", rating: 0, comment: "" };
    const [values, setValues] = useState(defaultValues);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setValues((values) => ({ ...values, [name]: value }));
    };

    const onAddReview = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      props.addReview(values);
      setValues(() => defaultValues);
    };

    return (
      <ReviewFormFields
        addReview={onAddReview}
        updateFormState={handleInputChange}
        formState={values}
      />
    );
  }
);

export default connect(null, { addReview })(ReviewForm);
