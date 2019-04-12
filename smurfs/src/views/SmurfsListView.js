import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getSmurfs } from '../actions'

class SmurfsListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    if (this.props.isFetching) {
      return (
        <p>Loading...</p>
      )
      
    }
    console.log(this.props)
    return (
      <div className="CharactersList_wrapper">
        <CharacterList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.rootReducer.smurfs,
    error: state.rootReducer.error,
    isFetching: state.rootReducer.isFetching
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs })(SmurfsListView);