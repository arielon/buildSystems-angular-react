const express = require("express"),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require("path")

const { mongoose } = require("./database");

const app = express()
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "../public")))

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
