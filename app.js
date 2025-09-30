const express = require('express');
const connectToDatabase = require('./database');
const app = express();



connectToDatabase()

app.get ("/", (req, res) => {
    res.json({
        Message : "This is home page"
    })
})

app.get ("/about", (req, res) => {
    res.json({
        Message : "This is about page"
    })
})


app.listen(3000, () => {
    console.log("NOdeJS project has started")
})


// mongodb+srv://bijaykumar786:<db_password>@cluster0.klv29gg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0