const mongoose = require("mongoose");

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost/Database_1', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });

         console.log('connect successfully');

    }
    catch{
        console.log('connect failure');

    }


};

module.exports = {connect};