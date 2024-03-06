const express = require("express");
const router = express.Router();

router.post(
    "/register", (req, res) => {
        res.json({message : "registered successfully"})
    }
);

router.get(
    "/login", (req, res) => {
        res.json({message : "Logged in successfully"})
    }
);

router.get(
    "/current-user", (req, res) => {
        res.json({message : "current user"})
    }
);



module.exports = router; 