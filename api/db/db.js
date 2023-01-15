import * as dotenv from "dotenv";
dotenv.config();
import  mongoose from 'mongoose';

function connect() {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection;

    db.on('connected', () => {
        console.log("connected to MongoDB Successfully");
    })
    db.on('error', (err) => {
        console.log('An error occurred while connecting to MongoDB');
        console.log(err);
    });
}

export default  connect;