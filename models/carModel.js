const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({

    name : {type : String, required : true},
    image : {type : String, required : true},

    capacity : {type : String, required : true},

    fuelType : {type : String, required : true},

    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String, required :true}
        }

    ],

    rentPerHour : {type : Number , required : true}

},{timestamps : true}

)
const carModel = mongoose.model('car',carSchema)
module.exports = carModel