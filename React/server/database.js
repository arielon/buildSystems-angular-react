const mongoose = require("mongoose");
        URI = "mongodb://localhost/tienda"

mongoose.set('useUnifiedTopology', true);
mongoose.connect(URI, { useNewUrlParser: true } )
                    .then(db => console.log("DB conectada papi"))
                    .catch(err => console.log(err));

module.exports = mongoose;