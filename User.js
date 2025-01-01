var mongoose = require('mongoose')

 const { Schema } = mongoose;
  
 const myfs = new Schema({
    username: String,
    password: String,
   

 })
 //schema export aa s model
 var model = mongoose.model('myfs',myfs);
 module.exports = model;