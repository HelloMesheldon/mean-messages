var mongoose = require('mongoose'),
    MessageSchema = new mongoose.Schema({
        message: { type: String, default: '' },
        updated_at: { type: Date, default: Date.now },
    });

module.exports = mongoose.model('Message', MessageSchema);