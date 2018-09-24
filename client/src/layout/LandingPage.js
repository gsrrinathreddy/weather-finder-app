import React, { Component } from 'react'
import Header from './header/Header';
import OpenPageBody from './body/OpenPageBody';
import Footer from './footer/footer';


export default class LandingPage extends Component {
  render() {
    const style ={
      
    }
    return (
      <div style={style}>
        <Header/>
        <OpenPageBody/>
        <Footer/>
      </div>
    )
  }
}
