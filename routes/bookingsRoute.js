const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const stripe = require('stripe')('sk_test_51Qo01UHOpEmURzPQKPfugPU9o6p8s1QOXbKeg7vQyVpmooT3mfosthoimDQZPJBQEvt13n8WyBOkECqAp0TuJdI7000lIQcWLj')
const { v4: uuidv4 } = require('uuid');
router.post("/bookcar",async(req,res)=>{


    const {token} = req.body
    try {

        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })

        const payment = await stripe.charges.create({
            amount : req.body.totalAmount * 100,
            currency : 'inr',
            customer : customer.id,
            receipt_email : token.email
        },{
            idempotencyKey : uuidv4()
        })

        if(payment){
            req.body.transactionId = payment.source.id
            const newbooking = new Booking(req.body)
            await newbooking.save()
            const car = await Car.findOne({_id : req.body.car})
            // console.log(req.body.car)

            car.bookedTimeSlots = (req.body.bookedTimeSlots)
            await car.save()
            res.send('Your booking is successfull')
        }
        else{
            return res.status(400).json(error);
        }

       

    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }

   

});

router.get("/getallbookings", async (req, res) => {
    try {
        const bookings = await Booking.find().populate('car');
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

module.exports = router;