// app.js
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const { createTable, fetchStats } = require('./functions/barang'); // Import functions
const { createCust, getCust } = require('./functions/cust'); // Import functions
const { createOrder, getOrder } = require('./functions/order'); // Import functions
const { createUsers } = require('./functions/user');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const transactionRouter = require('./routes/transaction');

const app = express();

// Function to initialize the database
async function initializeDatabase() {
  try {
    await createTable();
    await createCust();
    await createOrder();
    await createUsers();
    console.log('Database setup and stats fetch completed.');
  } catch (err) {
    console.error('Error during database setup:', err);
  }
}
initializeDatabase();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/order', transactionRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Setup port
const PORT = process.env.PORT || 3044; // Use environment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
