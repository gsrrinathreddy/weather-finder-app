import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../common-reusable-components/spinner/Spinner';
import { getCurrentCityLocation } from '../../actions/actions';

 class DisplayCurrentCityLocation extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){

    this.props.getCurrentCityLocation();

  }
  render() {
    console.log("Render Called")
    const cityInfo = this.props.city;
   
    let displayTable,displayTable1,table,city,state;
    
   
    
    console.log(displayTable1);
   
    // for(const key in cityInfo.currentCity){
    
    //   console.log(cityInfo.currentCity[key])
    
    // }

    
    let cityData;
   
   
    if(cityInfo.currentCity === null){
      cityData = <Spinner/>
  }else{
    if(cityInfo.currentCity.length != 0){
      displayTable = Object.keys(cityInfo.currentCity);
       displayTable1 = Object.values(cityInfo.currentCity);
       city = displayTable1[2];
       state = displayTable1[7];
      cityData = city + ' ' + state;
    }
  }
    return (
      <div>
     
      {cityData}
      
      </div>
    )
  }
}

PropTypes.DisplayCurrentCityLocation = ({
  getCurrentCityLocation:PropTypes.func.isRequired
})
const mapStateToProps = state => ({
  city:state.weather
})
export default connect(mapStateToProps,{getCurrentCityLocation})(DisplayCurrentCityLocation)
