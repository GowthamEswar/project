const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// POST /api/volunteers - Save volunteer data
router.post('/', async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/volunteers - Get all volunteers
router.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 