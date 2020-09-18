import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

function DrinkDetail(props){
  const messageStyles = {
    color: 'orange',
    fontWeight: 'bold'
  }

  const { drink, onClickingDelete, onClickingEdit, onClickingSell, onClickingRestock, message, pints} = props;

  return (
    <React.Fragment>
      <hr />
      <h3 className="drink-name">{drink.name}</h3>
      <p>Brand: {Object.values(drink)[0].brand}</p>
      <p>Flavor: {Object.values(drink)[0].flavor}</p>
      <p>Price: <span className = "price-detail">${Object.values(drink)[0].price}</span></p>
      <p>Pints left: {pints}</p>
      <p style={messageStyles}>{message}</p>
      <button onClick={() => onClickingSell(drink.id)} className="btn btn-primary">Sell</button>
      <button onClick={() => onClickingRestock(drink.id)} className="btn btn-primary">Restock</button>
      <button onClick={() => onClickingEdit()} className="btn btn-primary">Update</button>
      <button onClick={() => onClickingDelete(drink.id)} className="btn btn-primary">Delete</button>
      <hr/>
    </React.Fragment>
  );
}

const mapStateToProps = (state, props) => {
	return {
		pints: state.drinkList[Object.values(props.drink)[0].id].pints
	}
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default connect(mapStateToProps)(DrinkDetail);
