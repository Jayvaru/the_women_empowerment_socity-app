const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// projects Routes
router.get('/projects', async (req, res) => {
    try {
        const snapshot = await db.collection('projects').get();
        res.status(200).json(snapshot.docs);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});

// projects Routes by id
router.get('/projects/:id', async (req, res) => {
    try {    
        const snapshot = await db.collection('projects').doc(req.params.id).get();
        res.status(200).json(snapshot.data());
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});