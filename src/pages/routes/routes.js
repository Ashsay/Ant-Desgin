import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './../home';
import Demo from '../demo';
// import PropTypes from 'prop-types';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </Router>
    );
  }
}

// Routes.propTypes = {

// };

export default Routes;