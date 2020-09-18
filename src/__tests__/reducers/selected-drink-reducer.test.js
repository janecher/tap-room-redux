import selectedDrinkReducer from '../../reducers/selected-drink-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedDrinkReducer', () => {
	let action;

	const drinkData = {
		name : "Fanta",
    brand : "Coca-cola",
    flavor : "orange",
    price : "3",
    pints : 124,
    id: 1
	};

	test('Should return null if no drink is selected', () => {
		expect(selectedDrinkReducer(null, { type: null })).toEqual(null);
	});

	test('Should return selected drink', () => {
		const {
			name,
      brand,
      flavor,
      price,
      pints,
      id
		} = drinkData;
		action = {
			type: c.SELECT_DRINK,
			name : name,
      brand : brand,
      flavor : flavor,
      price : price,
      pints : pints,
      id: id
		};
		expect(selectedDrinkReducer(null, action)).toEqual({
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
});