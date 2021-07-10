const express = require('express');
const cors = require('cors');
const User = require('../models/userModel');
const router = express.Router();

// Middleware
router.use(express.json());
router.use(cors({
    origin: '*'
}));

// Sign Up - Creating a new account
router.post('/signup', async (req, res) => {
    try {
        const user = await new User({
            username: req.body.username,
            password: req.body.password
        });
        const newUser = await user.save();
        return res.status(201).json({ id: newUser._id });
    } catch (err) {
        return res.status(500).json({ id: null });
    }
});

// Log In - Using an account
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        if (user) {
            if (user.password != req.body.password) {
                return res.status(404).json({ id: null });
            }
            return res.status(200).json({ id: user._id });
        } else {
            return res.status(404).json({ id: null});
        }
    } catch (err) {
        return res.status(500).json({ id: null });
    }
});
module.exports = router;