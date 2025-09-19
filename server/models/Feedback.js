const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    role: { type: String, enum: ['student', 'volunteer', 'donor', 'visitor'], default: 'visitor' },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', FeedbackSchema);


