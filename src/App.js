import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// add
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

class App extends Component {
  signout() {
    Auth.signOut();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Meguro.dev #1 Sample App 2018/03/30</h1>
        </header>
        <p className="App-intro">
          <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.signout}>
          Signout
        </button>
      </div>
    );
  }
}

export default withAuthenticator(App, {includeGreetings: true});