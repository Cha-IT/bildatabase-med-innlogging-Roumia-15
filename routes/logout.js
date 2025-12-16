
const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    req.session.destroy();
    res.json({ message : "Du er logget ut."})
});

module.exports = router;
