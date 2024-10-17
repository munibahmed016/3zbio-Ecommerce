const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

const backendUrl = process.env.FRONTEND_URL ;
console.log(backendUrl);
app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true,                
}));

app.use(express.json());
app.use(cookieParser()); 

// Routes
app.use("/api", router);

// Set the PORT correctly
const PORT = process.env.PORT || 8082;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log('Connected to DB');
    });
});
