const express = require('express'),
    router = express.Router(),
    Tienda = require("../models/tienda")

router.get('/', async (req, res) => {
    const productos = await Tienda.find()
    res.json(productos)
})

router.post("/", async (req, res) => {
    const { nombre, precio, unidades } = req.body;
    new Tienda({
        
    })
    res.json("recibido")
})

module.exports = router;