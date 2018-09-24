import {GET_ERRORS} from '../constants/actionTypes';
const initialState = {};

//The error reducer takes in the initial state and the action dispatched by the action creators as its inputs.
// The action dispatched by the action-creators have 2 parameters, an action.type and a payload(optional)
// the error reducer is checking for the action.type GET_ERRORS dispatched by the action creator. 
// IF the action.type matches it returns the payload. The payload consists the errors details etc. this action.payload is sent 
// to the store.
export default  function(state=initialState,action){
  switch(action.type){
    case GET_ERRORS:
      return action.payload;
    default:
    return state;
  }
}