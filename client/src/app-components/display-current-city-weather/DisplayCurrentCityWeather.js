import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../common-reusable-components/spinner/Spinner';
import { getCurrentCityWeather } from '../../actions/actions';

 class DisplayCurrentCityWeather extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){

    this.props.getCurrentCityWeather();

  }
  render() {
   
    // for(const key in cityInfo.currentCity){
    
    //   console.log(cityInfo.currentCity[key])
    
    // }

    
    
    return (
      <div>
     
    
      
      </div>
    )
  }
}

PropTypes.DisplayCurrentCityWeather = ({
  getCurrentCityWeather:PropTypes.func.isRequired
})
const mapStateToProps = state => ({
  city:state.weather
})
export default connect(mapStateToProps,{getCurrentCityWeather})(DisplayCurrentCityWeather);
