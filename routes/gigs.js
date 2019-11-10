const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/' ,(req, res) => {
  console.log("inside get")
  Gig.findAll()
    .then(gigs => {
      console.log(gigs)
      //res.sendStatus(200)
      res.render('gigs', {
        gigs
      });//views called gigs
    })
    .catch(err => console.log('Error:- '+err))
    
  });

  // Add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'Looking for a Wordpres Developer',
    technologies: 'react, javascript, html, css, wordpress',
    budget: '$500',
    description: 'Software developer with 3 years of exp should work with us',
    contact_email: 'user1@gmail.com'
  }

  let { title, technologies, budget, description, contact_email } = data

  //Insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email,
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log('Error while creating a new record:- '+err));


})

module.exports = router