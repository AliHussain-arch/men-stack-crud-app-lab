const express = require('express');
const mongoose = require('mongoose');
const Animal = require('../models/animal.js');
const dotenv = require('dotenv');
dotenv.config();


// Index to retrieve and display a list of resources
const index = async (req,res)=>{
    const animals = await Animal.find();
    res.render('Index',{animals});
}
// Show displays a single resource
const show = async (req,res)=>{
    const animal = await Animal.findById(req.params.id);
    res.render('animals/view',{animal});
}

// New returns a form for creating a new resource
const newAnimal = async (req,res)=>{
    res.render('animals/create')
}

// Create Processes form data, creates a new resource
const create = (req,res)=>{
    Animal.create({
        name: req.body.name,
        habitat: req.body.habitat
    })
    res.redirect(`/animals`)
}
// Edit Returns a form for editing a resource
const edit = async (req,res)=>{
    const animal = await Animal.findById(req.params.id);
    res.render('animals/edit',{animal});
}
// Update Processes form data, updates a resource
const update = async (req,res)=>{
    const animal = await Animal.findByIdAndUpdate(req.params.id,{name: req.body.newName, habitat: req.body.newHabitat});
    res.redirect(`/animals/${req.params.id}`);
}

// Delete Deletes a resource
const destroy = async (req,res)=>{
    const animal = await Animal.findByIdAndDelete(req.params.id);
    res.redirect('/animals');
}

module.exports = {index, show, newAnimal, create, edit, update, destroy };