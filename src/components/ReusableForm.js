import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Name</label>
        <input
          type='text'
          name='name'
        />
        <label>Brand</label>
        <input
          type='text'
          name='brand'
        />
        <label>Flavor</label>
        <input
          type='text'
          name='flavor'
        />
        <label>Price</label>
        <input
          type='text'
          name='price'
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
