import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

function DrinkDetail(props){
  const { drink, onClickingDelete, onClickingEdit, onClickingSell, onClickingRestock, pints, brand, flavor, name, price} = props;

  return (
    <React.Fragment>
      <hr />
      <h3 className="drink-name">{name}</h3>
      <p>Brand: {brand}</p>
      <p>Flavor: {flavor}</p>
      <p>Price: <span className = "price-detail">${price}</span></p>
      <p>Pints left: {pints}</p>
      <button onClick={() => onClickingSell(Object.values(drink)[0].id)} className="btn btn-primary">Sell</button>
      <button onClick={() => onClickingRestock(Object.values(drink)[0].id)} className="btn btn-primary">Restock</button>
      <button onClick={() => onClickingEdit()} className="btn btn-primary">Update</button>
      <button onClick={() => onClickingDelete(Object.values(drink)[0].id)} className="btn btn-primary">Delete</button>
      <hr/>
    </React.Fragment>
  );
}

const mapStateToProps = (state, props) => {
	return {
    pints: state.drinkList[Object.values(props.drink)[0].id].pints,
    name: state.drinkList[Object.values(props.drink)[0].id].name,
    brand: state.drinkList[Object.values(props.drink)[0].id].brand,
    flavor: state.drinkList[Object.values(props.drink)[0].id].flavor,
    price: state.drinkList[Object.values(props.drink)[0].id].price
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
