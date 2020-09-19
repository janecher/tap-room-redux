import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className ="form-group">
          <label>Name</label>
          <input className="form-control" 
            type='text'
            name='name'
            required
          />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <input className="form-control"
            type='text'
            name='brand'
            required
          />
        </div>
        <div className="form-group">
          <label>Flavor</label>
          <input className="form-control"
            type='text'
            name='flavor'
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input className="form-control"
            type='text'
            name='price'
            required
          />
        </div>
        <button type='submit' className="btn btn-success btn-lg">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
