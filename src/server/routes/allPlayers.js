"use strict";
const express = require('express');
const router  = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (data) => {

  router.get('/', (req, res) => {
    axios.get(process.env.REACT_APP_ALL_PLAYERS_URL)
      .then(response => {
        console.log(response.data.players.player[0])})
      // .then((data) => {
      //   console.log("data", response)
      // })
  })

  return router
}
