const express = require('express');
const cors = require('cors');
const session = require('express-session');
const User = require('../models/userModel');
const router = express.Router();

// Middleware
router.use(express.json());
router.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}));
router.use(session({
    cookie: {secure: false}, 
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false
}));

// Sign Up Page
router.post('/signup', async (req, res) => {
    try {
        const user = await new User({
            username: req.body.username,
            password: req.body.password
        });
        const newUser = await user.save();
        req.session.user = { id: newUser._id};
        return res.status(201).json({ 
            id: newUser._id,
            message: 'Account Created Successfully'
        });
    } catch (err) {
        return res.status(500).json({ 
            id: null,
            message: err.message 
        });
    }
});

// Log In Page
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        if (!user) {
            return res.status(404).json({ 
                id: null,
                message: 'User Not Found'
            });
        }
        if (user.password != req.body.password) {
            return res.status(404).json({ 
                id: null, 
                message: 'Incorrect Password'
            });
        }
        req.session.user = { id: user._id };
        return res.status(200).json({ 
            id: user._id,
            message: 'Logged In Successfully'
        });
    } catch (err) {
        return res.status(500).json({ 
            id: null,
            message: err.message 
        });
    }
});

// Profile Page
router.get('/profile/:id', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        if (req.session.user.id != req.params.id) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        const user = await User.findOne({ _id: req.params.id });
        req.session.user = { id: user._id };
        return res.status(200).json({ message: user })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Individual Card Page
router.get('/card/:id/:cardId', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        if (req.session.user.id != req.params.id) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        const user = await User.findOne({ _id: req.params.id });
        let card;
        user.cards.forEach(item => {
            if (item._id == req.params.cardId) {
                card = item;
            }
        });
        req.session.user = { id: user._id };
        return res.status(200).json({ message: card })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Card Editor Page - Create Card
router.post('/card', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'No session' });
        }
        if (req.session.user.id != req.body.id) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        await User.updateOne({ _id: req.body.id }, { $push: { cards: {
            cardLayout: req.body.cardLayout,
            backgroundColor1: req.body.backgroundColor1,
            backgroundColor2: req.body.backgroundColor2,
            textColor1: req.body.textColor1,
            textColor2: req.body.textColor2,
            textColor3: req.body.textColor3,
            title: req.body.title,
            post: req.body.post,
            description: req.body.description,
            features: req.body.features,
            address: req.body.address,
            contact: req.body.contact
        }}});
        req.session.user = { id: req.body.id };
        return res.status(201).json({ message: 'Card Created Successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete Card
router.delete('/card/:id/:cardId', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        if (req.session.user.id != req.params.id) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        const user = await User.updateOne({ _id: req.params.id }, {
            $pull : {
                cards : {
                    _id: req.params.cardId
                }
            }
        });
        req.session.user = { id: user._id };
        return res.status(200).json({ message: 'Card Deleted Successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Card Editor Page - Update Card
router.patch('/card/:cardId', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        if (req.session.user.id != req.body.id) {
            return res.status(401).json({ message: 'Unauthenticated User' });
        }
        await User.updateOne({ _id: req.body.id, 'cards._id': req.params._id }, { $set : { 
            'cards.$.cardLayout': req.body.cardLayout,
            'cards.$.backgroundColor1': req.body.backgroundColor1,
            'cards.$.backgroundColor2': req.body.backgroundColor2,
            'cards.$.textColor1': req.body.textColor1,
            'cards.$.textColor2': req.body.textColor2,
            'cards.$.textColor3': req.body.textColor3,
            'cards.$.title': req.body.title,
            'cards.$.post': req.body.post,
            'cards.$.description': req.body.description,
            'cards.$.features': req.body.features,
            'cards.$.address': req.body.address,
            'cards.$.contact': req.body.contact
        }})
        req.session.user = { id: req.body.id };
        return res.status(200).json({ message: 'Card Updated Successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Logout
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ message: err.message });
        return res.status(200).json({ message: 'Logged Out Successfully' });
    });
});

module.exports = router;