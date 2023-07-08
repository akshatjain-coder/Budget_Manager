const mongoose = require('mongoose')
const expense = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    }
    ,
    amount:{
        type: Number,
        required:true,
        trim:true,
    }
    ,
    type:{
        type: String,
        default:"Expense"
    }
    ,
    date:{
        type:Date,
        required:true
    }
    ,
    category:{
        type:String,
        trim:true,
    }
    ,
    descritption:{
        type:String,
        max_lenght: 50,
        trim:true,
    }
},{timestamps:true})

module.exports = mongoose.model('Expense',expense)