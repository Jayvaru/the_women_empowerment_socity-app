const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// donation Routes
router.post('/donations', async (req, res) => {
    try {
        const { name, amount, payment_mode} = req.body;
        const timestamp = new Date().getTime();
        const newDonation = {
            name,
            amount,
            payment_mode,
            timestamp,
        };

        // Use 'db' instead of 'admin.firestore()'
        const response = await db.collection('donations').add(newDonation);
        res.status(201).json({ message: "Donation created successfully", data: response });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});