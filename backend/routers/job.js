const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// jobs Routes
router.get('/jobs', async (req, res) => {
    try {
        const snapshot = await db.collection('jobs').get();
        res.status(200).json(snapshot.docs);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});

// jobs route by id
router.get('/jobs/:id', async (req, res) => {
    try {
        const snapshot = await db.collection('jobs').doc(req.params.id).get();
        res.status(200).json(snapshot.data());
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});