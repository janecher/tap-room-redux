import formVisibleReducer from './form-visible-reducer';
import drinkListReducer from './drink-list-reducer';
import selectedDrinkReducer from './selected-drink-reducer';
import editingReducer from './editing-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	drinkList: drinkListReducer,
  selectedDrink: selectedDrinkReducer,
  editing: editingReducer
});

export default rootReducer;