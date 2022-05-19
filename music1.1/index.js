const express = require('express');
const app = express();

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/music", {
    useNewUrlParser: true,
    useUnifiedTopology: true})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'));


//middleware goole.com/me/api
//localhost:3000/music
app.use('/music', require('./routes/index'));
app.listen(3000,()=>{
    console.log("Server started on port 3000");
})

