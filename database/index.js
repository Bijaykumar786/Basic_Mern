const Mongoose = require("mongoose");


async function connectToDatabase() {
   await Mongoose.connect(process.env.MONGODB_URI)
   console.log("Connected to database")
}


module.exports = connectToDatabase