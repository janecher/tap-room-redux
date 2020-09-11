import React from "react";
import PropTypes from "prop-types";

function Drink(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDrinkClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>
        <p>$ {props.price}</p>
        <p>{props.flavor}</p>
        <p>Pints left: {props.pints}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string, 
  whenDrinkClicked: PropTypes.func 
};

export default Drink;
