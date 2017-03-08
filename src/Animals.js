import React, { Component } from 'react';
import { Link } from 'react-router';
import { getAnimals } from './services/animalService';

import Animal from './Animal';

class Animals extends Component {
  constructor() {
    super();

    this.state = {
      animals: []
    }
  }

  render() {

    const animals = this.state.animals.map((animal, i) => {
      return (
        <Link to={"animals/" + animal.name} key={i}>
          <Animal animal={animal} />
        </Link>
      )
    })

    return (
      <div>
        <h1>Animals Page!</h1>
        {animals[0] ? animals : <h2>Loading...</h2>}
      </div>
    )
  }
  componentDidMount() {
    getAnimals().then(animals => {
      this.setState({
        animals: animals
      })
    })
  }
}

export default Animals
