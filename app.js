const express = require('express');
const app = express();

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


