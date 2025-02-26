const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({

    car : {type : mongoose.Schema.ObjectId, ref : 'car'},

    user : {type : mongoose.Schema.ObjectId, ref : 'users'},

    bookedTimeSlots : {from : {type : String}, to : {type : String} },

    hoursDifference : {type : Number},

    totalAmount : {type : Number},

    transactionId : {type : String},

    driverRequired : {type : Boolean}

},{timestamps : true}

)
const bookingModel = mongoose.model('bookings',bookingSchema)
module.exports = bookingModel