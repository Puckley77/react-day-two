import axios from 'axios';

export function getAnimals() {
  return axios.get(`https://practiceapi.devmountain.com/api/animals`)
  .then(res => res.data);
}

export function getAnimal(name) {
  return axios.get(`https://practiceapi.devmountain.com/api/animals/${name}`)
  .then(res => res.data);
}
