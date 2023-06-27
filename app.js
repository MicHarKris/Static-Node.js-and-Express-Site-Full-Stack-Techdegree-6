// initializes all the express functionalities into a variable, as well as adding it as a requirement for the file.
const express = require('express');

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded
app.use('/static', express.static('public')); // serves static assets from the 'public' folder

// Set view engine to .pug
app.set('view engine', 'pug');

// Basic rooutes
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');

app.use('/', indexRoute);
app.use('/about', aboutRoute);

// 404 Error Handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });

  // Global Error Handler
  app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || 'Server Error';
    console.error(`Error: ${err.status} - ${err.message}`);
    res.status(err.status).render('error', { errorMessage: err.message });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});