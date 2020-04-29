const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema( {
    folder: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    extension: String,
    path: {
        type: String,
        unique: true,
        required: true
    },
    JSONData: String
});

module.exports = mongoose.model('File', fileSchema);