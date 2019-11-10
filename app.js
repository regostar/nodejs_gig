//Entry Point
const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');

//Database
const db = require('./config/database');


//TEST DB
db.authenticate()
  .then(() => console.log('Database Conected ....'))
  .catch(err => console.log('Error: ' + err))
const app = express();

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));// Call it main.handlebars
app.set('view engine', 'handlebars');

// Set Static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('INDEX PAGE'));//Index page


//Gig Routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


