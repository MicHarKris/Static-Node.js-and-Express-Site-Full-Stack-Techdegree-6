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

app.use('/about', aboutRoute);
app.use('/', indexRoute);

// 404 Error Handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);  
});

// Error Handler
app.use((err, req, res, next) => {
  err.status = err.status || 500;
  err.message = err.message || 'Server Error';
  console.error(`Error: ${err.status} - ${err.message}`);

  if (err.status === 404) {
    res.status(404).render('page-not-found', { errorMessage: err.message, status: err.status });
  } else {
    res.status(err.status).render('error', { errorMessage: err.message, status: err.status, stack: err.stack });
  }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});