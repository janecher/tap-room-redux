import React from 'react';
import NewDrinkForm from './NewDrinkForm';
import DrinkList from './DrinkList';
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class BarControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const { dispatch } = this.props;
		if (this.props.selectedDrink != null) {
      const action = a.selectDrinkToNull();
			dispatch(action);
			const action2 = a.editingFalse();
			dispatch(action2);
		} else {
			const action3 = a.toggleForm();
			dispatch(action3);
    }
  }

  handleAddingNewDrinkToList = (newDrink) => {
    const { dispatch } = this.props;
		const action = a.addDrink(newDrink);
		dispatch(action);
		const action2 = a.toggleForm();
		dispatch(action2);
  }

  handleChangingSelectedDrink = (id) => {
    const { dispatch } = this.props;
		const selectedDrinkInPostList = this.props.drinkList[id];
		const action = a.selectDrink(selectedDrinkInPostList);
		dispatch(action);
  }

  handleDeletingDrink = (id) => {
    const { dispatch } = this.props;
		const action = a.deleteDrink(id);
    dispatch(action);
    const action2 = a.selectDrinkToNull();
		dispatch(action2);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editingTrue();
		dispatch(action);
  }

  handleEditingDrinkInList = (drinkToEdit) => {
    const { dispatch } = this.props;
		const action = a.addDrink(drinkToEdit);
		dispatch(action);
		const action2 = a.editingFalse();
    dispatch(action2);
    // const action3 = a.selectDrinkToNull();
		// dispatch(action3);
  }

  handleDrinkSellClick = (drinkId) => {
    const drinkToSell = this.props.drinkList[drinkId];
    console.log(drinkToSell);
    if(drinkToSell.pints > 0) {
      const { dispatch } = this.props;
      const removeOnePint = drinkToSell.pints - 20;
      drinkToSell.pints = removeOnePint;
      const action = a.addDrink(drinkToSell);
      dispatch(action);
    }
    // this.setState({
    //     bookList: editedDrinkList,
    //     editing: false
    //   });
  }

  handleDrinkRestockClick = (drinkId) => {
    const drinkToRestock = this.props.drinkList[drinkId];
    const { dispatch } = this.props;
    drinkToRestock.pints = 124;
    const action = a.addDrink(drinkToRestock);
    dispatch(action);
    // this.setState({
    //     bookList: editedDrinkList,
    //     editing: false
    //   });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.props.editing) {      
      currentlyVisibleState = <EditDrinkForm 
                                drink = {this.props.selectedDrink} 
                                onEditDrink = {this.handleEditingDrinkInList} />
      buttonText = "Return to Drink List";
    } else if (this.props.selectedDrink != null) {
      let message = "";
      if(this.props.selectedDrink.pints < 10 && this.props.selectedDrink.pints > 0) {
        message = "Almost Empty";
      } else if (this.props.selectedDrink.pints < 1) {
        message = "Out of Stock";
      }
      currentlyVisibleState = <DrinkDetail 
                                drink = {this.props.selectedDrink}
                                message = {message} 
                                onClickingDelete = {this.handleDeletingDrink} 
                                onClickingEdit = {this.handleEditClick} 
                                onClickingSell = {this.handleDrinkSellClick} 
                                onClickingRestock = {this.handleDrinkRestockClick} />
      buttonText = "Return to Drink List";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />;
      buttonText = "Return to Drink List";
    } else {
      if(this.props.drinkList === {}) {
        currentlyVisibleState = <p className="no-drinks">No drinks available</p>
      } else {
        currentlyVisibleState = <DrinkList 
                                  drinkList={this.props.drinkList} 
                                  onDrinkSelection={this.handleChangingSelectedDrink} />;
      }
      buttonText = "Add Drink";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="btn btn-primary">{buttonText}</button> 
      </React.Fragment>
    );
  }
}

BarControl.propTypes = {
	drinkList: PropTypes.object,
	formVisibleOnPage: PropTypes.bool,
  selectedDrink: PropTypes.object,
  editing: PropTypes.bool
};

const mapStateToProps = (state) => {
  console.log(state);
	return {
		drinkList: state.drinkList,
		formVisibleOnPage: state.formVisibleOnPage,
    selectedDrink: state.selectedDrink,
    editing: state.editing
	};
};

BarControl = connect(mapStateToProps)(BarControl);

export default BarControl;
