import {
   GET_CURRENT_CITY_LOCATION,
   GET_CURRENT_CITY_FORECAST, 
   GET_ERRORS,
   CURRENT_CITY_LOADING,
  GET_SEARCHED_CITY_FORECAST
} from "../constants/actionTypes";

import axios from 'axios';
export const getCurrentCityLocation = () =>dispatch=>{
  dispatch(currentCityLoading());
  axios.get('/gl/json')
       .then(res => {
              console.log(res.data)
              dispatch({
                
                type:GET_CURRENT_CITY_LOCATION,
                payload:res.data
              })}
        )     
        .catch(err =>{
                dispatch({
                  type:GET_ERRORS,
                  payload:{}
                })
              }
            )
        
}

export const currentCityLoading = ()  =>{
  return{
    type:CURRENT_CITY_LOADING,
    payload:{}
  }
}
export const getCurrentCityWeather = () =>dispatch=> {
  dispatch(currentCityLoading());
  axios.get('/weather?q=London,uk&APPID=f39042ebbd7ee2a44d50f57c1cf50ae7')
       .then(res => {
              console.log("get current city weather",res.data)
              dispatch({
                
                type:GET_CURRENT_CITY_FORECAST,
                payload:res.data
              })}
        )     
        .catch(err =>{
                dispatch({
                  type:GET_ERRORS,
                  payload:{}
                })
              }
            )
}
export const getSearchedCityForecast = (enteredData)=>dispatch=>{
  const city = enteredData.city_zip_name;
  console.log("getSearchedCityAction",city);
  axios.get(`/weather?q=${city}&APPID=f39042ebbd7ee2a44d50f57c1cf50ae7`)
  .then(res => {
         console.log("get search city weather",res.data)
         dispatch({
           
           type:GET_SEARCHED_CITY_FORECAST,
           payload:res.data
         })}
   )     
   .catch(err =>{
           dispatch({
             type:GET_ERRORS,
             payload:{}
           })
         }
       )
}