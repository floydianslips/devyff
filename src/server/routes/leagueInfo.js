"use strict";
const express = require('express');
const router  = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (knex) => {

  router.get('/franchises', (req, res) => {
    axios.get(process.env.REACT_APP_LEAGUE_INFO_URL)
      .then(response => {
        let data = response.data.league.franchises.franchise

        // console.log(data)
        data.forEach((team) => {
          let {id, name, bbidAvailableBalance, division} = team;
          console.log("player", name)
          knex('franchises')
           .insert({'name': name, 'id': id, 'division': division, 'waiver_balance': bbidAvailableBalance})
           .then(console.log("inserted into database"))
        })
        // res.send(response.data.players)
        })
        .catch((err) => {
          console.log('Error in AllPlayers Route', err)})
  })

  router.get('/assets', (req, res) => {
    axios.get(process.env.REACT_APP_LEAGUE_ASSETS_URL)
      .then(response => {
        let data = response.data.assets.franchise
        // console.log(data)
        // console.log(data)
        data.forEach((team) => {
          let player = team.players.player;
          // console.log("player", player)
          // console.log("draft picks", team.id, team.futureYearDraftPicks.draftPick)
          // console.log('faab', team.blindBiddingDollars.amount)
          knex('franchise_assets')
           .insert({'players': team.players.player, 'id': team.id, 'faab_left':team.blindBiddingDollars.amount , 'draft_picks': team.futureYearDraftPicks.draftPick})
           .then(console.log("inserted into database"))
        })
        // res.send(response.data.players)
        })
        .catch((err) => {
          console.log('Error in leagueInfo/assets Route', err)})
  })

  return router
}
