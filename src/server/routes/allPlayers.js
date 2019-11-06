"use strict";
const express = require('express');
const router  = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (knex) => {

  router.get('/', (req, res) => {
    axios.get(process.env.REACT_APP_ALL_PLAYERS_URL)
      .then(response => {
        let data = response.data.players.player;
        // console.log(data)
        data.forEach((player) => {
          let {id, name, team, position} = player
          console.log("player", player.name)
          knex('all_players')
           .insert({'name': name, 'id': id, 'team': team, 'position': position})
           .then(console.log("inserted into database"))
        })
        res.send(response.data.players)
        })
        .catch((err) => {
          console.log('Error in AllPlayers Route', err)})
  })

  return router
}
