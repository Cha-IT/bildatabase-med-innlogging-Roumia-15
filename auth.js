const express = require('express');
const session = require('express-session');

function kreverInnlogging(req, res, next) {
    if(!req.session || !req.session.bruker) {
        return res.status(401).json({ message: "Du må være innlogget for å få tilgang" })
    }
    next();
}

module.exports = kreverInnlogging;