const Mongoose = require("mongoose");


async function connectToDatabase() {
   await Mongoose.connect('mongodb+srv://bijaykumar786:mernbasic@cluster0.klv29gg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
   console.log("Connected to database")
}


module.exports = connectToDatabase