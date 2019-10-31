const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
const cors = require('cors');
const allPlayers = require('./routes/allPlayers')

// app.use(cors);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  // next();
// });
app.use(express.static('dist'));
app.use('/api/allPlayers', allPlayers())

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

  // axios.get('https://www77.myfantasyleague.com/2019/export?TYPE=rosters&L=33318')
  // .then(response => {
  //   return response.data
  // } )
  // .then((data) => {
  //   console.log(data)
  // })
  // .catch((err) => {
  //   console.log('error', err)
  // })

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
