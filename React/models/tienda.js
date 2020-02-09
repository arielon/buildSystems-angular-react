const mongoose = require("mongoose");
const { Schema } = mongoose;

const tiendaSchema = new Schema({
    nombre: { type: String, required: true},
    precio: { type: Number, required: true},
    unidades: { type: Number, required: true}
});

module.exports = mongoose.model("Tienda", tiendaSchema);