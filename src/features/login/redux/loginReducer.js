import {
  SET_JWT,
} from './loginActions';

const INITIAL_STATE = {
  jwt: null,
};

export default (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        jwt: action.payload,
      };
    default:
      return state;
  }
};
