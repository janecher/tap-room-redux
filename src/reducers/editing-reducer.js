import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
	switch (action.type) {
		case c.EDITING_FORM_TRUE:
      return true;
    case c.EDITING_FORM_FALSE:
      return false;
		default:
			return state;
	}
};