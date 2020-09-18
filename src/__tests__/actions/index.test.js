import * as c from '../../actions/ActionTypes';
import * as actions from './../../actions/index.js';

describe('animal forum actions', () => {
	it('toggleForm should create TOGGLE_FORM action', () => {
		expect(actions.toggleForm()).toEqual({
			type: c.TOGGLE_FORM,
		});
	});
});