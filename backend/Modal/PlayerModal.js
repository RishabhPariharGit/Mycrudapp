const mongoose = require ('mongoose')
const { Schema } = mongoose;

const FootballSchema = new Schema({
  name: String, 
  club: String,
  goals: String,
});

const Footballstore = mongoose.model('Footballdetail', FootballSchema);
module.exports = Footballstore 
