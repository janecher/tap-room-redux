import React from 'react';
import NewDrinkForm from './NewDrinkForm';
import DrinkList from './DrinkList';
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm';

class BarControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      drinkList: [],
      selectedDrink: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null, 
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewDrinkToList = (newDrink) => {
    const newDrinkList = this.state.drinkList.concat(newDrink);
    this.setState({drinkList: newDrinkList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedDrink = (id) => {
    const selectedDrinkInList = this.state.drinkList.filter(drink => drink.id === id)[0];
    this.setState({selectedDrink: selectedDrinkInList});
  }

  handleDeletingDrink = (id) => {
    const newDrinkList = this.state.drinkList.filter(drink => drink.id !== id);
    this.setState({
      drinkList: newDrinkList,
      selectedDrink: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingDrinkInList = (drinkToEdit) => {
    const editedDrinkList = this.state.drinkList
      .filter(drink => drink.id !== this.state.selectedDrink.id)
      .concat(drinkToEdit);
    this.setState({
        drinkList: editedDrinkList,
        editing: false,
        selectedDrink: null
      });
  }

  handleDrinkSellClick = (id) => {
    const drinkToSell = this.state.drinkList.filter(drink => drink.id === id)[0]; 
    if(drinkToSell.pints > 0) {
      drinkToSell.pints--;
    }
    const editedDrinkList = this.state.drinkList
      .filter(drink => drink.id !== id)
      .concat(drinkToSell);
    this.setState({
        bookList: editedDrinkList,
        editing: false
      });
  }

  handleDrinkRestockClick = (id) => {
    const drinkToRestock = this.state.drinkList.filter(drink => drink.id === id)[0];;
    drinkToRestock.pints = 124;    
    const editedDrinkList = this.state.drinkList
      .filter(drink => drink.id !== id)
      .concat(drinkToRestock);
    this.setState({
        bookList: editedDrinkList,
        editing: false
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditDrinkForm 
                                drink = {this.state.selectedDrink} 
                                onEditDrink = {this.handleEditingDrinkInList} />
      buttonText = "Return to Drink List";
    } else if (this.state.selectedDrink != null) {
      let message = null;
      if(this.state.selectedDrink.pints < 10 && this.state.selectedDrink.pints > 0) {
        message = "Almost Empty";
      } else if (this.state.selectedDrink.pints < 1) {
        message = "Out of Stock";
      }
      currentlyVisibleState = <DrinkDetail 
                                drink = {this.state.selectedDrink}
                                message = {message} 
                                onClickingDelete = {this.handleDeletingDrink} 
                                onClickingEdit = {this.handleEditClick} 
                                onClickingSell = {this.handleDrinkSellClick} 
                                onClickingRestock = {this.handleDrinkRestockClick} />
      buttonText = "Return to Drink List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />;
      buttonText = "Return to Drink List";
    } else {
      if(this.state.drinkList.length === 0) {
        currentlyVisibleState = <p className="no-drinks">No drinks available</p>
      } else {
        currentlyVisibleState = <DrinkList 
                                  drinkList={this.state.drinkList} 
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

export default BarControl;
