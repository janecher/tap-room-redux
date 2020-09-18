import rootReducer from '../../reducers/index-reducer';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import drinkListReducer from '../../reducers/drink-list-reducer';
import selectedDrinkReducer from '../../reducers/selected-drink-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {
	test('Should return default state if no action type is supplied', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			drinkList: {},
			formVisibleOnPage: false,
      selectedDrink: null,
      editing: false
		});
	});

	test('Check that initial state of drinkListReducer matches root reducer', () => {
		expect(store.getState().drinkList).toEqual(
			drinkListReducer(undefined, { type: null })
		);
	});

	test('Check that initial state of formVisibleReducer matches root reducer', () => {
		expect(store.getState().formVisibleOnPage).toEqual(
			formVisibleReducer(undefined, { type: null })
		);
	});

	test('Check that initial state of selectedDrinkReducer matches root reducer', () => {
		expect(store.getState().selectedDrink).toEqual(
			selectedDrinkReducer(undefined, { type: null })
		);
	});

	test('Check that initial state of drinkListReducer matches root reducer', () => {
		const action = {
			type: c.ADD_DRINK,
			name : "Fanta",
      brand : "Coca-cola",
      flavor : "orange",
      price : "3",
      pints : 124,
      id: 1
		};
		store.dispatch(action);
		expect(store.getState().drinkList).toEqual(
			drinkListReducer(undefined, action)
		);
	});

  test('Check that initial state of drinkListReducer matches root reducer', () => {
		const action = {
			type: c.DELETE_DRINK,
      id: 1
		};
		store.dispatch(action);
		expect(store.getState().drinkList).toEqual(
			drinkListReducer(undefined, action)
		);
  });
  
	test('Check that initial state of formVisibleReducer matches root reducer', () => {
		const action = {
			type: c.TOGGLE_FORM
		};
		store.dispatch(action);
		expect(store.getState().formVisibleOnPage).toEqual(
			formVisibleReducer(undefined, action)
		);
	});

	test('Check that initial state of selectedDrinkReducer matches root reducer', () => {
		const action = {
			type: c.SELECT_DRINK,
			name : "Fanta",
      brand : "Coca-cola",
      flavor : "orange",
      price : "3",
      pints : 124,
      id: 1
		};
		store.dispatch(action);
		expect(store.getState().selectedDrink).toEqual(
			selectedDrinkReducer(undefined, action)
		);
  });
  
  test('Check that initial state of selectedDrinkReducer matches root reducer', () => {
		const action = {
			type: c.SELECT_DRINK
		};
		store.dispatch(action);
		expect(store.getState().selectedDrink).toEqual(
			selectedDrinkReducer(undefined, action)
		);
	});
});
