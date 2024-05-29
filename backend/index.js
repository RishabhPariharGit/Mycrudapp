const express = require('express')
const cors = require('cors');
const DBConn = require('./Dbconnection/Dbconnect')
const Footballtb = require ('./Modal/PlayerModal')


const {Playerinfo, getPlayerinfo,getsingleplayer,dltsingledta,updtData} = require('./Playerdetails/playerdetails')

const app = express()
app.use(cors());
app.use(express.json());

const port = 5070

DBConn();
Footballtb();


app.post('/plydt',Playerinfo)
app.get('/plydt',getPlayerinfo)
app.get('/plydt/:_id',getsingleplayer)
app.delete('/plydt/:_id',dltsingledta)
app.put('/plydt/:_id',updtData)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
