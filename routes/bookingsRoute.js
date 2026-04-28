const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const createStripeClient = () => {
    if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error("STRIPE_SECRET_KEY is required to process bookings");
    }

    return require('stripe')(process.env.STRIPE_SECRET_KEY);
};
const { v4: uuidv4 } = require('uuid');
router.post("/bookcar",async(req,res)=>{


    const {token} = req.body
    try {
        if (!token?.id || !token?.email) {
            return res.status(400).json({ message: "Payment token is missing. Please retry checkout." });
        }

        if (!req.body.user || !req.body.car || !req.body.bookedTimeSlots?.from || !req.body.bookedTimeSlots?.to) {
            return res.status(400).json({ message: "Booking details are incomplete. Please select the car and time again." });
        }

        const totalAmount = Number(req.body.totalAmount);
        if (!Number.isFinite(totalAmount) || totalAmount <= 0) {
            return res.status(400).json({ message: "Invalid booking amount. Please select a valid time slot." });
        }

        const car = await Car.findOne({_id : req.body.car})
        if (!car) {
            return res.status(404).json({ message: "Selected car was not found." });
        }

        const stripe = createStripeClient();

        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })

        const payment = await stripe.charges.create({
            amount : Math.round(totalAmount * 100),
            currency : 'inr',
            customer : customer.id,
            receipt_email : token.email
        },{
            idempotencyKey : uuidv4()
        })

        if(payment){
            req.body.transactionId = payment.id
            const newbooking = new Booking(req.body)
            await newbooking.save()

            car.bookedTimeSlots.push(req.body.bookedTimeSlots)
            await car.save()
            res.send('Your booking is successful')
        }
        else{
            return res.status(400).json({ message: "Payment could not be completed. Please try again." });
        }

       

    } catch (error) {
        console.log(error)
        const statusCode = error.type === "StripeCardError" ? 402 : 400;
        return res.status(statusCode).json({
            message: error.message || "Booking failed. Please try again."
        });
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
router.post('/deletebooking', async (req, res) => {
    const { bookingId } = req.body;
  
    try {
      await Booking.findByIdAndDelete(bookingId);
      res.status(200).send('Booking deleted successfully');
    } catch (error) {
      res.status(500).send('Error deleting booking');
    }
  });
  
module.exports = router;
