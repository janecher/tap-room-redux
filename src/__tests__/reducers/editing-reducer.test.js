import * as c from './../../actions/ActionTypes';
import editingReducer from '../../reducers/editing-reducer';

describe('editingReducer', () => {
	test('Should return default state if no action type is supplied', () => {
		expect(editingReducer(false, { type: null })).toEqual(false);
	});

	test('Should editing state to true', () => {
		expect(
			editingReducer(false, {
				type: c.EDITING_FORM_TRUE
			})
		).toEqual(true);
  });
  
  test('Should editing state to false', () => {
		expect(
			editingReducer(false, {
				type: c.EDITING_FORM_FALSE
			})
		).toEqual(false);
	});
});