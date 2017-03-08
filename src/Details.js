import React, { Component } from 'react';
import { getAnimal } from './services/animalService';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animal: {}
    }
  }


  render() {
    return (
      <div>
        <h1>{this.state.animal.name}</h1>
        <p>Diet: {this.state.animal.diet}</p>
        <p>Status: {this.state.animal.status}</p>
      </div>
    )
  }

  componentDidMount() {
    getAnimal(this.props.params.name).then(animal => {
      this.setState({animal})
    })
  }
}

export default Details
