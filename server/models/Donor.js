const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  city: { type: String, required: true },
  availability: { type: String, enum: ['available', 'temporarily-unavailable'], default: 'available' },
  lastDonatedAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donor', DonorSchema);
