const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken'); 
const SECRET_KEY = "your-secret-key";

// courseCertificate routes
router.get('/courseCertificates', async (req, res) => {
    try {
        const snapshot = await db.collection('courseCertificates').get();
        res.status(200).json(snapshot.docs);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});

// courseCertificate routes by id
router.get('/courseCertificates/:id', async (req, res) => {
    try {
        const snapshot = await db.collection('courseCertificates').doc(req.params.id).get();
        res.status(200).json(snapshot.data());
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" ,error: error});
    }
});