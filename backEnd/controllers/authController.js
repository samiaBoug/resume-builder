const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};
// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => { 
    try{
        const { name, email, password, profilImageUrl } = req.body;
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if(userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        profilImageUrl
    });
         // return user data with JWT
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profilImageUrl: user.profilImageUrl,
        token: generateToken(user._id)
    });
} catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
}
   
}

// @desc Login user
// @route POST /api/auth/login
// @access Public
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(500).json({message: ' Invalid email or password'})
        }
        // compare password 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).json({message : 'Password incorrect !'})
        }
        //return user data with jwt 
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profilImageUrl: user.profilImageUrl,
            token: generateToken(user._id)

        })
        
    } catch (error) {
        return res.status(500).json({message : 'server error', error : error.message})
    }
}

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password")
        
        if (!user) {
            return res.status(404).json({message : ' User not found !'})
        }
         res.json(user)
    } catch (error) {
        return res.status(500).json({messsage : ' server error' , error : error.message})
    }
};

module.exports = {generateToken, registerUser, loginUser, getUserProfile};  