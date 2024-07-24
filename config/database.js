const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
};
connect();
mongoose.connection.on('connected',()=>console.log('Connected to MONGO DATABASE'));