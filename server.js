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
const parseOrigins = (value) => (
    value
        ? value.split(',').map((origin) => normalizeOrigin(origin.trim())).filter(Boolean)
        : []
);
const allowedOrigins = [
    ...parseOrigins(process.env.FRONT_END),
    ...parseOrigins(process.env.CLIENT_URL),
    'http://localhost:3000',
    'http://127.0.0.1:3000'
];
const isAllowedOrigin = (origin) => {
    if (!origin) {
        return true;
    }

    const normalizedOrigin = normalizeOrigin(origin);

    return (
        allowedOrigins.includes(normalizedOrigin) ||
        /^https?:\/\/localhost(:\d+)?$/i.test(normalizedOrigin) ||
        /^https?:\/\/127\.0\.0\.1(:\d+)?$/i.test(normalizedOrigin) ||
        /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(normalizedOrigin)
    );
};

app.use(express.json());
app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (isAllowedOrigin(origin)) {
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


