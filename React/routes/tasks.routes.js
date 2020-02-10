const express = require('express'),
    router = express.Router(),
    Tienda = require("../models/tienda");

    router.get('/', async (req, res) => {
        const productos = await Tienda.find()
        res.json(productos)
    })

module.exports = router;