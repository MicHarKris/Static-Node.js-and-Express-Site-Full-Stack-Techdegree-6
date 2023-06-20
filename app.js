// initializes all the express functionalities into a variable, as well as adding it as a requirement for the file.
const express = require('express');

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded
app.use('/static', express.static('public')); // serves static assets from the 'public' folder

// Set view engine to .pug
app.set('view engine', 'pug');

const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');

app.use('/', indexRoute);
app.use('/about', aboutRoute);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});