import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner'
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor() {
        super()
  this.state = {
      name: '',
      height: '',
      age: ''
  }
    }


  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addSmurf = ()=> {
    this.props.addSmurf({
        name: this.state.name,
        age:this.state.age,
        height: this.state.height
    })
  }


  render() {
    return (
      <div className="smurf-form">
        <h2>Add New Smurf</h2>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChanges}
            value={this.state.name}
          />
          <input
            type="text"
            name="height"
            placeholder="height"
            onChange={this.handleChanges}
            value={this.state.height}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChanges}
            value={this.state.age}
          />
          <button type="submit" onClick={this.addSmurf}>
          Add Smurf
        </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ addSmurf }) => ({
  addSmurf
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
