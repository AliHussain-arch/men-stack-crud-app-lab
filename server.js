const mongoose = require('mongoose');
const dotenv = require('dotenv');
const database = require('./config/database.js');
const express = require('express');
const app = express();
const ejs = require('ejs');
const morgan = require('morgan');
app.use(morgan('dev'));
const methodOverride = require('method-override');
const Animal = require('./models/animal.js');
const animalsController = require('./controllers/animalsController.js');

// Setting a view engine
app.set('view engine', 'ejs');

// Parse data from forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup method override middleware
app.use(methodOverride('_method'));

// To view the Index page
app.get('/animals',animalsController.index)

// To display a form to create a new object
app.get('/animals/new', animalsController.newAnimal)

// To display a single object
app.get('/animals/:id',animalsController.show)

// To create a new object
app.post('/animals', animalsController.create)

// To view the edit page
app.get('/animals/:id/edit', animalsController.edit)

// To update an animal
app.put('/animals/:id', animalsController.update)

// To delete a single object
app.delete('/animals/:id', animalsController.destroy)

app.listen('3000', () => console.log('connected to port 3000'));

