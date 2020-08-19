import { combineReducers } from 'redux';
import spacexReducer from './reducers';
 
const rootReducer = combineReducers({
  spacexData: spacexReducer
})
 
export default rootReducer;