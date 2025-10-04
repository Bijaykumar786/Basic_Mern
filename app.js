require('dotenv').config()
const express = require('express');
const connectToDatabase = require('./database');
const Blog = require ('./model/blogModel')

const app = express();
app.use(express.json())
const {multer,storage} = require ('./middleware/multerConfig')
const upload = multer ({storage : storage})


connectToDatabase()

app.get ("/", (req, res) => {
    res.json({
        Message : "This is home page"
    })
})

// app.get ("/about", (req, res) => {
//     res.json({
//         Message : "This is about page"
//     })

app.post("/blog", upload.single('image'), (req, res) => {
   const {title, description,image,subtitle} = req.body
    Blog.create ({
    title : title,
    description : description,
    subtitle : subtitle,
    image : image
   })
    res.status(200).json({
        Message : "This blog is succesfully "
    })
})






app.listen(process.env.PORT, () => {
    console.log("NOdeJS project has started")
})


// mongodb+srv://bijaykumar786:<db_password>@cluster0.klv29gg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0