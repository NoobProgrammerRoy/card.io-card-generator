const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cardio-card-generator', { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', err => {
    console.log(err);
});

db.once('open', () => {
    console.log('Database opened successfully!');
});

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    cards: [{
        cardLayout: { type: String, required: true },
        backgroundColor1: { type: String, required: true },
        backgroundColor2: { type: String, required: true },
        textColor1: { type: String, required: true },
        textColor2: { type: String, required: true },
        textColor3: { type: String, required: true },
        title: { type: String, required: true },
        post: { type: String, required: true },
        description: { type: String, required: true },
        features: [
            { type: String, required: true}
        ],
        address: { type: String, required: true },
        contact: { type: String, required: true }
    }]
});

// User Model
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;