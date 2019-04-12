import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"

import SmurfList from './SmurfList'
import { getSmurfs } from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
      <h1>Redux Smurfs</h1>
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs })(App)
