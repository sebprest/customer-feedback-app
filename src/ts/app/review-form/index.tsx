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
      <ReviewFormFields
        addReview={onAddReview}
        updateFormState={handleInputChange}
        formState={values}
      />
    );
  }
);

export default connect(null, { addReview })(ReviewForm);
