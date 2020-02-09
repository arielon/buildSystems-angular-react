const mongoose = require("mongoose");
const { Schema } = mongoose;

const tiendaSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true}
});

module.exports = mongoose.model("Tienda", tiendaSchema);