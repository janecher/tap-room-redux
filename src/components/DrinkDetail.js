import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props){
  const messageStyles = {
    color: 'orange',
    fontWeight: 'bold'
  }

  const { drink, onClickingDelete, onClickingEdit, onClickingSell, onClickingRestock, message} = props;

  return (
    <React.Fragment>
      <h3>{drink.name}</h3>
      <p>Brand: {drink.brand}</p>
      <p>Flavor: {drink.flavor}</p>
      <p>Price: ${drink.price}</p>
      <p>Pints left: {drink.pints}</p>
      <p style={messageStyles}>{message}</p>
      <button onClick={() => onClickingSell(drink.id)}>Sell</button>
      <button onClick={() => onClickingRestock(drink.id)}>Restock</button>
      <button onClick={() => onClickingEdit()}>Update</button>
      <button onClick={() => onClickingDelete(drink.id) }>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default DrinkDetail;
