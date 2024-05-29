const express = require ('express')
const PlayerDEt = require('../Modal/PlayerModal')

const app = express()
app.use(express.json());


//posting data into the database
const Playerinfo = async(req,res) =>{
const name = req.body.name;
const club = req.body.club;
const goals = req.body.goals;
const playercompt = await PlayerDEt.create({
    name,
    club,
    goals,
})
res.json({playercompt:playercompt});
}



//getting all the details from the database
const getPlayerinfo = async(req,res) =>{
    const getplayercompt = await PlayerDEt.find();
    res.json({getplayercompt:getplayercompt});
    
}


//getting single player details from the databse using _id
const getsingleplayer = async(req,res) =>{
    const SingleplID = req.params._id;
    const Singleidfind = await PlayerDEt.findById(SingleplID);
    res.json({Singleidfind:Singleidfind});
}



//deleting single data from the databse
const dltsingledta = async(req,res)=>{
  const getsingledta = req.params._id;
 await PlayerDEt.deleteOne({_id:getsingledta});
  res.json({sucess:"Data Deleted Successfully"});

}

const updtData = async(req,res)=>{
   
    const DtaId = req.params._id;

    const name = req.body.name;
    const club = req.body.club;
    const goals = req.body.goals;
    
    await PlayerDEt.findByIdAndUpdate(DtaId,{
        name:name,
        club:club,
        goals:goals,
    });


    const Dtadisp = await PlayerDEt.findById(DtaId);    

    res.json({Dtadisp:Dtadisp})


}


module.exports = {Playerinfo, getPlayerinfo, getsingleplayer,dltsingledta,updtData}