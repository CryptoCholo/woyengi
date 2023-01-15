import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import connect from './db/db.js';
import pkg from 'express-openid-connect';
// import orderRouter from './routes/order.routes.js';
import config from './config/authConfig.js';
const {  auth } = pkg;
const app = express()

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(auth(config));



connect();

// app.use('/orders', requiresAuth, orderRouter);


// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

app.listen(process.env.PORT, () => {
    console.log(`app running on ${process.env.PORT}`)
})