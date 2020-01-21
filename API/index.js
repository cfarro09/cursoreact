const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express()


mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://carlosfarro:carlitos@cluster0-prapm.mongodb.net/veterinaria", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());


app.listen(4000, () => {
    console.log("working");
})