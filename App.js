/**
 * @description Tutorial on using detox wtih amplify authentication 

 * @author Frikan Erwee ferwee[at]gmail.com
 */

import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './assests/aws-exports';
import Router from './Router'

Amplify.configure(aws_exports);

export default class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}

