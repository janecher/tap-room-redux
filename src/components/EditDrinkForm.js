import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditDrinkForm (props) {
  const { drink } = props;

  function handleEditDrinkFormSubmission(event) {
    event.preventDefault();
    props.onEditDrink({name: event.target.name.value, brand: event.target.brand.value, flavor: event.target.flavor.value, price: event.target.price.value, pints : Object.values(drink)[0].pints, id: Object.values(drink)[0].id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditDrinkFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}

EditDrinkForm.propTypes = {
  onEditDrink: PropTypes.func
};

export default EditDrinkForm;
