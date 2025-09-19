const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// POST /api/donors - Register a donor
router.post('/', async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/donors - List donors (optionally filter by bloodGroup/city)
router.get('/', async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;
    const filter = {};
    if (bloodGroup) filter.bloodGroup = bloodGroup;
    if (city) filter.city = city;
    const donors = await Donor.find(filter).sort({ createdAt: -1 });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
