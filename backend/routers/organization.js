const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// organizations Routes
router.get('/organizations', async (req, res) => {
    try {
        const snapshot = await db.collection('organizations').get();
        res.status(200).json(snapshot.docs);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});

// organizations route by id
router.get('/organizations/:id', async (req, res) => {
    try {
        const snapshot = await db.collection('organizations').doc(req.params.id).get();
        res.status(200).json(snapshot.data());
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});