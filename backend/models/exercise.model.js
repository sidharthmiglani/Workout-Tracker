const mongoose = require('mongoose');
const schema = mongoose.schema;
const exerciseSchema = new schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, require: true },
    date: { type: Date, required: true },
}, {
        timestamps: true,
    });

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;