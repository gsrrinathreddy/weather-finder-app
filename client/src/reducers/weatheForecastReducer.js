import {GET_CURRENT_CITY_LOCATION,GET_SEARCHED_CITY_LOCATION,GET_SEARCHED_CITY_FORECAST, CURRENT_CITY_LOADING, GET_CURRENT_CITY_FORECAST} from '../constants/actionTypes'; 

const initialState = {
  currentCity:null,
  currentCityWeather:null,
  loading:false,
  serchedCityForecast:null
}

export default function(state=initialState,action){
  switch(action.type){
    case CURRENT_CITY_LOADING:
    return{
      ...state,
      loading:true,
      payload:action.payload
    }
    case GET_CURRENT_CITY_LOCATION:
    return{
      ...state,
      currentCity:action.payload,
      loading:false
    }
    case GET_CURRENT_CITY_FORECAST:
    return{
      ...state,
      currentCityWeather:action.payload,
      loading:false
    }
    case GET_SEARCHED_CITY_FORECAST:
    return{
      ...state,
      searchedCityWeather:action.payload,
      loading:false
    }

    default:
    return state;
  }
}