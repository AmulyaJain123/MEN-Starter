const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const homeRoutes = require('./routes/home');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(homeRoutes);

app.use((req, res, next) => {
    res.status(404).render('notFound');
});


app.listen(3000);