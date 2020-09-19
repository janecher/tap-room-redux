import React from "react";
import PropTypes from "prop-types";

function Drink(props){
  return (
    <React.Fragment>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="panel panel-success">
          <div className="panel-body">
            <h3>{props.name}</h3>
            <p>Brand: {props.brand}</p>
            <p>Flavor: {props.flavor}</p>
            <p>Price: <span className = "price">${props.price}</span></p>
            <p>Pints left: <span className = "price">{props.pints}</span></p>
            <button onClick={() => props.whenDrinkClicked(props.id)} className="btn btn-secondary">Drink details</button>
          </div>
        </div>
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
