import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSearchedCityForecast} from '../../actions/actions';
import TextFieldComponent from '../../common-reusable-components/input-text-field/TextFieldComponent';
import PropTypes from 'prop-types';
import Spinner from '../../common-reusable-components/spinner/Spinner';
import { k2c } from '../../utils';

 class WeatherDispalyComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      city_zip_code:"",
     
      errors:{}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


      onChange(e){

        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
     // this.setState({errors:{}})
      e.preventDefault();

      const enteredData = {
          city_zip_name: this.state.city_code,


      };

      console.log(enteredData)

     this.props.getSearchedCityForecast(enteredData);


  }
  render() {
    const result = this.props.forecast;
    let display,displayTable,displayTable1;
    let forecast ={};
    let max_temp,min_temp,timestamp;
    if(result.searchedCityWeather===null){
     display = <Spinner/>
     console.log("result main",result.searchedCityWeather.main)
    }else{
      if(result.searchedCityWeather != null){
        displayTable = Object.keys(result.searchedCityWeather);
        displayTable1 = Object.values(result.searchedCityWeather);
        max_temp = k2c( Object.values(displayTable1[3])[4]);
        min_temp = k2c(Object.values(displayTable1[3])[3]);
       
        forecast.date = new Date(displayTable1[7]*1000).toDateString();
        forecast.avg_temp=k2c( Object.values(displayTable1[3])[0]);
        forecast.humidity= Object.values(displayTable1[3])[2];
        forecast.max_temp = max_temp;
        forecast.min_temp = min_temp;
        console.log( Object.keys(displayTable1[3]))
        console.log(forecast)
        display=(
          <table className="table ">
         
          <tbody>
          <tr>
          
          <th scope="col"></th>
          <th scope="col"></th>
            </tr>
             <tr>
             <th scope="col">factor</th>
             <th scope="col">value</th>
             </tr>
            
            <tr>
             
              <td>avg temp</td>
              <td>{forecast.avg_temp}</td>
            
            </tr>
            <tr>
            
            <td>max temp</td>
            <td>{forecast.max_temp}</td>
          
            </tr>
            <tr>
            <td>min temp</td>
            <td>{forecast.min_temp}</td>
          
            </tr>
            <tr>
            <td>humidity</td>
            <td>{forecast.humidity}</td>
          
            </tr>
            <tr>
            <td>date</td>
            <td>{forecast.date}</td>
          
            </tr>
          </tbody>
        </table>
        )
     
    }
  }
    return (
      <div>
      <form onSubmit ={this.onSubmit}>
          <TextFieldComponent
          placeholder="Enter City Name or Zip Code"
          name="city_code"
          value={this.state.name}
          type="text"
          onChange={this.onChange}

      />

      <input type="submit" className="btn btn-info btn-block mt-4"  />
      </form>
      <div>
      
       
   {display}
      </div>
      </div>
    )
  }
}
WeatherDispalyComponent.propTypes={
  getSearchedCityForecast:PropTypes.func.isRequired
}
const mapStateToProps = state =>({
  forecast:state.weather
})
export default connect(mapStateToProps,{getSearchedCityForecast})(WeatherDispalyComponent);