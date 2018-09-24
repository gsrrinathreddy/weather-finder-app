import React, { Component } from 'react'
import './titles.component.css'

export default class Titles extends Component {
  render() {
    return (
      <div className="titles">
        <h1 className="title">Weather Finder App</h1>
        <p className="sub-title">Find out temperature, humidity and other weather conditions any where in the world</p>
      </div>
    )
  }
}
