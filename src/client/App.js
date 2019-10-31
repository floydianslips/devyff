import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import axios from 'axios';


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    // axios.get('https:www54.myfantasyleague.com/2005/export?TYPE=players&details')
    //   .then(res => {
    //     console.log(res.data)
    //   } )
    // axios.get('localhost:8080/api')
    // console.log("test")
    axios.get('http://localhost:8080/api/allPlayers')
.then(response => {
  console.log("help me")
  return response.data
} )
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.log('error', err)
})
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
         {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
