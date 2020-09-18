import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
	const {
		name,
		brand,
		flavor,
		price,
		pints,
		id
	} = action;
	switch (action.type) {
		case c.SELECT_DRINK:
			return {
				[id]: {
					name : name,
          brand : brand,
          flavor : flavor,
          price : price,
          pints : pints,
					id: id
				}
			};
		case c.SELECT_DRINK_NULL:
			return null;
		default:
			return state;
	}
};