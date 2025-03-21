const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// workspace Routes
router.get('/workspaces', async (req, res) => {
    try {
        const snapshot = await db.collection('wrokspaces').get();
        res.status(200).json(snapshot.docs);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});

// workspace Routes by id
router.get('/workspaces/:id', async (req, res) => {
    try {    
        const snapshot = await db.collection('workspaces').doc(req.params.id).get();
        res.status(200).json(snapshot.data());
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});