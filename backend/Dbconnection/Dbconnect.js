const mongoose = require('mongoose');

const Databaseconn = async()=>{
try { 
await mongoose.connect('mongodb+srv://rishabhgit1704:Crudop123@cluster0.zxl31fg.mongodb.net/');
console.log("Db connected");
} catch (error) {
    console.log("not connected");
}

}

module.exports = Databaseconn