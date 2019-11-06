import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import axios from 'axios';


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
    // axios.get('http://localhost:8080/api/leagueInfo/franchises')
    //   .then((res) => {
    //     console.log("response", res)
    //   })
      // axios.get('http://localhost:8080/api/leagueInfo/info')
      // .then((res) => {
      //   console.log("response", res)
      // })
      axios.get('http://localhost:8080/api/leagueInfo/assets')
      .then((res) => {
        console.log("response", res)
      })
    }




  populateAllPlayersDB = () => {
    axios.get('http://localhost:8080/api/allPlayers')
      .then((res) => {
        console.log(res.data.player, "help me")})
      .catch((err) => {
        console.log('error', err)})
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
