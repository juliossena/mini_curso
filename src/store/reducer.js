import { combineReducers } from 'redux';
import { loginReducer } from '../features/login/redux';

const reducer = combineReducers({
  loginReducer,
});

export default reducer;
