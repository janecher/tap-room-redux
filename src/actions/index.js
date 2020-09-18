import * as c from './ActionTypes';

export const toggleForm = () => ({
	type: c.TOGGLE_FORM
});

export const selectDrink = (drink) => {
	const { name,
		brand,
		flavor,
		price,
		pints,
		id } = drink;
	return {
		type: c.SELECT_DRINK,
		name : name,
    brand : brand,
    flavor : flavor,
    price : price,
    pints : pints,
    id: id
	};
};

export const selectDrinkToNull = () => {
	return {
		type: c.SELECT_DRINK_NULL
	};
};