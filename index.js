require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/users.routes');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web-hackathon', { useNewUrlParser: true });

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use('/users', userRoutes);


app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('homepage/index.ejs')
})

app.listen(process.env.PORT);