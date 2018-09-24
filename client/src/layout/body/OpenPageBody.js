import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Titles from '../../app-components/title-component/titles.component';
import './OpenPageBody.css'

import FormComponent from '../../app-components/form-component/form.component';
import keys from '../../config/keys';
import Spinner from '../../common-reusable-components/spinner/Spinner'
import DisplayCurrentCityLocation from '../../app-components/display-current-city-location/DisplayCurrentCityLocation';
import DisplayCurrentCityWeather from '../../app-components/display-current-city-weather/DisplayCurrentCityWeather';
import WeatherDispalyComponent from '../../app-components/weather-display-component/weather.display.component';
const styles = theme => ({
  root: {
    
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    background:'url(/assets/b1.jpg) no-repeat ',
    backgroundSize:'100% 100%',
    opacity:'30%',
    color:'white',
  
    textAlign:'center',
   height:'900px',
    width:'100%',
    
  },
  leftGrid:{
    height:'500px'
  },
  rightGrid:{
    height:'500px',
    width:'100%',
    padding:'20px'

  }
 
});




class OpenPageBody extends React.Component {
  
  constructor(props){
    super(props)
   
    this.state={
      
        country_name:'',
        state_name:'',
        city_name:'',
        postal_code:'',
        latitude:'',
        longitude:'',
     
    
    

    }
   
  } 

//   componentDidMount(e){
   
  
//      axios.get('/json')
//       .then(res => {
//        const result = res.data;

  
      
//       this.setState({ 
//         country_name:result.country_name,
//         city_name:result.city,
//         state_name:result.state,
//         postal_code:result.postal


//        });

//        console.log(result)
      
//     })
  
//     if ("geolocation" in navigator) {
//        // check if geolocation is supported/enabled on current browser
//        navigator.geolocation.getCurrentPosition(
//         function success(position) {
//           // for when getting location is a success
//           console.log('latitude', position.coords.latitude, 
//                       'longitude', position.coords.longitude);
                   
//                      lat = position.coords.latitude;
//                      lon = position.coords.longitude;
//                   console.log("Hi",lat,lon)      
//               //getWeather(lat,lon)
                  
                 
                      
//         })}
       
      
   
      
// 		// 	latlng 	 = new google.maps.LatLng(lat, lng),
// 		// 	geocoder = new google.maps.Geocoder();
// 		// geocoder.geocode({'latLng': latlng}, function(results, status) {
// 		// 	if (status == google.maps.GeocoderStatus.OK) {
// 		// 		if (results[1]) {
// 		// 			for (var i = 0; i < results.length; i++) {
// 		// 				if (results[i].types[0] === "locality") {
// 		// 					var city = results[i].address_components[0].short_name;
// 		// 					var state = results[i].address_components[2].short_name;
// 		// 					console.log('city state',city+state)
// 		// 				}
// 		// 			}
// 		// 		}
// 		// 		else {console.log("No reverse geocode results.")}
// 		// 	}
// 		// 	else {console.log("Geocoder failed: " + status)}
// 		// });
//     //    },
//     //  function error(error_message) {
//     //     // for when getting location results in an error
//     //     console.error('An error has occured while retrieving location', error_message)
       
//     //      }
//     //   )}
//     //  else {
//     //   // geolocation is not supported
//     //   // get your location some other way
//     //   console.log('geolocation is not enabled on this browser')
      
//     // }
// }

// getWeather = async (lat,lon) =>{
//   console.log(lat,lon)
 
//   const api_call = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=${lat}&${lon}&APPID=f39042ebbd7ee2a44d50f57c1cf50ae7');

//  console.log(api_call.data);

// }     
 
render(){
    
      console.log(this.state)
  const dt = new Date();
  console.log(dt.toDateString());
  // console.log(Object.assign(dt).map(key=>{
  //   return <div>key:{key}, value:{dt[key]}</div>
  // }))
  const {classes} = this.props;
  return (
    
      <Paper className={classes.root} elevation={0}>
        

        <div className="container ">
            <div className="row">
            <Titles />     
            </div> 
            <div className="row">
                <div className="col-12 col-sm-3 col-md-4 col-lg-6  ">
                    <div className="col-12 col-sm-3 col-md-6 col-lg-12">
                    {dt.toDateString()}
                    </div>
                    <div className="col">
                      <DisplayCurrentCityLocation/>
                    </div>
                    <div className="col right-column">
                      <DisplayCurrentCityWeather/>
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-md-4 col-lg-6  ">
                    <div className="col-12 col-sm-3 col-md-6 col-lg-12">
                         <WeatherDispalyComponent/>
                    </div>
                </div>
            </div> 
        </div>
            
            
             
             
              
        
         
         
       
        
         
       
      </Paper>
    
  );
}
  
}

OpenPageBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenPageBody);