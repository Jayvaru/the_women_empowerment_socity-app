const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// Admin Login Route
router.post('/login', async (req, res) => {  
    try {
        const { email, password } = req.body;

        // Use 'db' instead of 'admin.firestore()'
        const snapshot = await db.collection('admin_login')
            .where('email', '==', email).get();

        if (snapshot.empty) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        let adminData;
        snapshot.forEach(doc => adminData = { id: doc.id, ...doc.data() });

        // Compare password (Consider hashing passwords for security)
        if (adminData.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: adminData.id, email: adminData.email },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({ token, admin: adminData });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { name,email, phone, password, city, state , pan_no, address, gender, dob, religion, education, occupation, about } = req.body;
        const timestamp = new Date().getTime();
        const newUser = {
            name,
            email,
            phone,
            password,
            city,
            state,
            pan_no,
            address,
            gender,
            dob,
            religion,
            education,
            occupation,
            about,
            timestamp,
        };

        // Use 'db' instead of 'admin.firestore()'
        const response = await db.collection('user_profile').add(newUser);
        res.status(201).json({ message: "User created successfully", data: response });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

module.exports = router;