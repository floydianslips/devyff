"use strict";
const express = require('express');
const router  = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
// const knex = require('knex');

dotenv.config();

module.exports = (knex) => {

  router.get('/', (req, res) => {
    axios.get(process.env.REACT_APP_ALL_PLAYERS_URL)
      .then(response => {
        console.log(response.data.players.player)
        let data = response.data.players.player;
        // console.log(data)
        data.forEach((player) => {
          console.log("player", player.name)
          knex('all_players')
           .insert({'name': player.name, 'id': player.id, 'team': player.team, 'position': player.position})
           .then(console.log("inserted into database"))
        })
        // console.log(response.data.players.player[0])
        // console.log("response sent", response.data)
        res.send(response.data.players)
        })
        .catch((err) => {
          console.log('Error in AllPlayers Route', err)})
        // .then((data) => {
      //   console.log("data", response)
      // })
  })

  return router
}
