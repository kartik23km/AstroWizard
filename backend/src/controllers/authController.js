import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../config/db.js';

// Helper to generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'super_secret_cosmos_key_123!', {
    expiresIn: '30d',
  });
};

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please add all required fields: name, email, password' });
  }

  try {
    // Check if user exists
    const userExists = db.data.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = {
      id: crypto.randomUUID(),
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    // Save to LowDB
    db.data.users.push(newUser);
    await db.write();

    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser.id),
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide both email and password' });
  }

  try {
    // Find user
    const user = db.data.users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

/**
 * @desc    Get current user profile (READ)
 * @route   GET /api/auth/profile
 * @access  Private
 */
export const getUserProfile = async (req, res) => {
  // User is already resolved by the protect middleware and attached to req.user
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(404).json({ message: 'User profile not found' });
  }
};

/**
 * @desc    Update user profile (UPDATE)
 * @route   PUT /api/auth/profile
 * @access  Private
 */
export const updateUserProfile = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userIndex = db.data.users.findIndex((u) => u.id === req.user.id);

    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = db.data.users[userIndex];

    // If updating email, make sure it is not taken by another user
    if (email && email.toLowerCase() !== user.email.toLowerCase()) {
      const emailTaken = db.data.users.find(
        (u) => u.id !== user.id && u.email.toLowerCase() === email.toLowerCase()
      );
      if (emailTaken) {
        return res.status(400).json({ message: 'Email address is already in use by another account' });
      }
      user.email = email.toLowerCase();
    }

    if (name) {
      user.name = name;
    }

    // If updating password
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    db.data.users[userIndex] = user;
    await db.write();

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      // Send a new token if profile gets updated (optional but convenient)
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error during profile update' });
  }
};

/**
 * @desc    Delete user account (DELETE)
 * @route   DELETE /api/auth/profile
 * @access  Private
 */
export const deleteUserProfile = async (req, res) => {
  try {
    const userIndex = db.data.users.findIndex((u) => u.id === req.user.id);

    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove user from array
    db.data.users.splice(userIndex, 1);
    await db.write();

    res.json({ message: 'User account deleted successfully' });
  } catch (error) {
    console.error('Delete account error:', error);
    res.status(500).json({ message: 'Server error during account deletion' });
  }
};
