import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import weatherForeCastReducer from './weatheForecastReducer';

export default combineReducers({
  weather:weatherForeCastReducer
})