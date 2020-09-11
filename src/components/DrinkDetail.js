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
      <p>Price: <span className = "price">${drink.price}</span></p>
      <p>Pints left: {drink.pints}</p>
      <p style={messageStyles}>{message}</p>
      <button onClick={() => onClickingSell(drink.id)} className="btn btn-primary">Sell</button>
      <button onClick={() => onClickingRestock(drink.id)} className="btn btn-primary">Restock</button>
      <button onClick={() => onClickingEdit()} className="btn btn-primary">Update</button>
      <button onClick={() => onClickingDelete(drink.id)} className="btn btn-primary">Delete</button>
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
