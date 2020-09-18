import drinkListReducer from '../../reducers/drink-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('drinkListReducer', () => {
  let action;
  
  const drinkData = {
		name : "Fanta",
    brand : "Coca-cola",
    flavor : "orange",
    price : "3",
    pints : 124,
    id: 1
  };
  
  const currentState = {
    1: {name : "Fanta",
    brand : "Coca-cola",
    flavor : "orange",
    price : "3",
    pints : 124,
    id: 1},
    2: {name : "Sprite",
    brand : "Coca-cola",
    flavor : "lemon",
    price : "3",
    pints : 124,
    id: 2}
  }

	test('Should return default state if there is not action type passed into the reducer', () => {
		expect(drinkListReducer({}, { type: null })).toEqual({});
	});

	test('Should successfully add new drink data to drinkList', () => {
    const {
			name,
      brand,
      flavor,
      price,
      pints,
      id
		} = drinkData;
		action = {
			type: c.ADD_DRINK,
			name : name,
      brand : brand,
      flavor : flavor,
      price : price,
      pints : pints,
      id: id
		};
		expect(drinkListReducer({}, action)).toEqual({
			[id]: {
				name : name,
        brand : brand,
        flavor : flavor,
        price : price,
        pints : pints,
        id: id
			},
		});
  });
  
  test('Should successfully delete a drink', () => {
    action = {
      type: c.DELETE_DRINK,
      id: 1
    };
    expect(drinkListReducer(currentState, action)).toEqual({
      2: {name : "Sprite",
      brand : "Coca-cola",
      flavor : "lemon",
      price : "3",
      pints : 124,
      id: 2}
    });
  });
});
