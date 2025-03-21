const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// problem solution routes
router.get('/problemSolutions', async (req, res) => {
    try {
        const snapshot = await db.collection('problemSolutions').get();
        res.status(200).json(snapshot.docs);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});

// problem solution routes by id
router.get('/problemSolutions/:id', async (req, res) => {
    try {    
        const snapshot = await db.collection('problemSolutions').doc(req.params.id).get();
        res.status(200).json(snapshot.data());
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});