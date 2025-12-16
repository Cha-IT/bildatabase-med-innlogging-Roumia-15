const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const path = require("path");


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"));
});


router.post("/", async (req, res) => {
    const { fornavn, epost, passord } = req.body;

    if (!fornavn || !epost || !passord) {
        return res.status(400).json({ message: "Alle felt må fylles ut" });
    }

    const eksisterer = db
        .prepare("SELECT * FROM person WHERE epost = ?")
        .get(epost);

    if (eksisterer) {
        return res.status(400).json({ message: "E-post er allerede registrert" });
    }

    const hash = await bcrypt.hash(passord, 10);

    db.prepare(`
        INSERT INTO person (fornavn, epost, passord)
        VALUES (?, ?, ?)
    `).run(fornavn, epost, hash);

    res.json({ message: "Bruker opprettet!" });
});

module.exports = router;
