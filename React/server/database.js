const mongoose = require("mongoose"),
        URI = "mongodb://localhost/tienda",
        Operaciones = require("../routes/CRUD.js")

mongoose.set('useUnifiedTopology', true);
mongoose.connect(URI, { useNewUrlParser: true }, function (err, db) {
        Operaciones.insertarProducto(db, (error, result) => {
                if(error)console.log("Error insertando registros" + error);
        });
})
                    .then(db => console.log("DB conectada papi"))
                    .catch(err => console.log(err));

module.exports = mongoose;