const mongoose = require('mongoose');

const db = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection error', error);
    }

}