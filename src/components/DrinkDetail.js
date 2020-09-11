import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props){
  const { drink, onClickingDelete, onClickingEdit, onClickingBuy, onClickingRestock} = props;

  return (
    <React.Fragment>
      <h3>{drink.name}</h3>
      <p>{drink.brand}</p>
      <p>$ {drink.price}</p>
      <p>{drink.flavor}</p>
      <p>Pints left: {drink.pints}</p>
      <button onClick={() => onClickingBuy(drink.id)}>Buy</button>
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
  onClickingBuy: PropTypes.func
};

export default DrinkDetail;
