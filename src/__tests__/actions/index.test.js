import * as c from '../../actions/ActionTypes';
import * as actions from './../../actions/index.js';

describe('animal forum actions', () => {
	it('toggleForm should create TOGGLE_FORM action', () => {
		expect(actions.toggleForm()).toEqual({
			type: c.TOGGLE_FORM
		});
  });
  it('editing should create EDITING_FORM action', () => {
		expect(actions.editing()).toEqual({
			type: c.EDITING_FORM
		});
  });
  it('selectDrink should create SELECT_DRINK action', () => {
		expect(
			actions.selectDrink({
				name : "Fanta",
        brand : "Coca-cola",
        flavor : "orange",
        price : "3",
        pints : 124,
        id: 1
			})
		).toEqual({
			type: c.SELECT_DRINK,
			name : "Fanta",
      brand : "Coca-cola",
      flavor : "orange",
      price : "3",
      pints : 124,
      id: 1
		});
  });
  it('selectDrinkToNull should create SELECT_DRINK_NULL action', () => {
		expect(actions.selectDrinkToNull()).toEqual({
			type: c.SELECT_DRINK_NULL
		});
  });
  it('deleteDrink should create DELETE_DRINK action', () => {
		expect(actions.deleteDrink(1)).toEqual({
			type: c.DELETE_DRINK,
			id: 1
		});
  });
  it('addDrink should create ADD_DRINK action', () => {
		expect(
			actions.addDrink({
				name : "Sprite",
        brand : "Coca-cola",
        flavor : "lemon",
        price : "3",
        pints : 124,
        id: 2
			})
		).toEqual({
			type: c.ADD_DRINK,
			name : "Sprite",
      brand : "Coca-cola",
      flavor : "lemon",
      price : "3",
      pints : 124,
      id: 2
		});
	});
});