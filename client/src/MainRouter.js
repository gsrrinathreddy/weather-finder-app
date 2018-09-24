import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import LandingPage from './layout/LandingPage';

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      
      </div>
    )
  }
}

export default MainRouter;
