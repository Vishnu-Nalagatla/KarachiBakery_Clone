import { combineReducers } from 'redux';
import deliveryReducer from '../components/deliveryComponents/deliveryReducer';

const rootReducer = () => {
  return (
   combineReducers({
    deliveryReducer
   })
  );
}

export default rootReducer;
