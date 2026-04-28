const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const dbconnection = require('./db');
const normalizeOrigin = (value) => {
    if (!value) {
        return null;
    }

    try {
        return new URL(value).origin;
    } catch (error) {
        return value;
    }
};
const allowedOrigins = [
    process.env.FRONT_END,
    process.env.CLIENT_URL,
    'http://localhost:3000'
].map(normalizeOrigin).filter(Boolean);

app.use(express.json());
app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (!origin || allowedOrigins.includes(origin)) {
        if (origin) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        res.setHeader('Vary', 'Origin');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

        if (req.method === 'OPTIONS') {
            return res.sendStatus(204);
        }

        return next();
    }

    return res.status(403).json({ message: 'Not allowed by CORS' });
});


app.use('/api/cars/', require('./routes/carsRoute'))
app.use('/api/users/', require('./routes/usersRoute'))
app.use('/api/bookings/', require('./routes/bookingsRoute'))

const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}
app.get('/',(req,res)=>res.send('Hello World'))
app.listen(port, ()=>console.log('Node js server started in port',{port}))


