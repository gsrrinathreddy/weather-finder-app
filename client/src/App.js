import React, { Component } from 'react';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter} from 'react-router-dom'; 
import {Provider} from 'react-redux';

import {pink,indigo} from '@material-ui/core/colors';
import MainRouter from './MainRouter';
import store from './store/store';
import './App.css';


const theme = createMuiTheme({
  palette:{
    primary:{
      light:'#757de8',
      main:'#3f51b5',
      dark:'#002984',
      contrastText:'#fff'
    },
    secondary:{
      light:'#ff79b0',
      main:'#ff4081',
      dark:'#c60055',
      contrastText:'#000'
    },
    openTitle:indigo['400'],
    protectedTitle:pink['400'],
    type:'light'
  }
})
class App extends Component {
  render() {
    return (
    <Provider store ={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <MainRouter/>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>   
     
      
    );
  }
}

export default App;
