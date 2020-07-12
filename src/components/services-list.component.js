import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component {
  constructor(props) {
    super(props

    this.deleteService = this.deleteService.bind(this);

    this.state = {services: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/services/')
      .then(response => {
        this.setState({ services: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteService(id) {
  axios.delete('http://localhost:5000/services/'+id)
    .then(response => { console.log(response.data)});

  this.setState({
    services: this.state.services.filter(el => el._id !== id)
  })
}

  render() {
      return (
        <div>
          <p>You are on the Services List component!</p>
        </div>
      )
    }
}
