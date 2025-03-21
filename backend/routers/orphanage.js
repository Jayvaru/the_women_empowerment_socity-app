const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// orphanages Routes
router.get('/orphanages', async (req, res) => {
    try {
        const snapshot = await db.collection('orphanages').get();
        res.status(200).json(snapshot.docs);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});

// orphanages route by id
router.get('/orphanages/:id', async (req, res) => {
    try {
        const snapshot = await db.collection('orphanages').doc(req.params.id).get();
        res.status(200).json(snapshot.data());
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});