module.exports.insertarProducto = function (db, callback) {
    let colleccion = db.collection("tiendas")
    db.collection("tiendas").find({}).count().then((n) => {
        if (n == 0) {
            colleccion.insertMany([{
                "nombre": "aguacate",
                "precio": 30,
                "unidades": 54
            }, {
                "nombre": "ajo",
                "precio": 12,
                "unidades": 300
            }, {
                "nombre": "almendras",
                "precio": 57,
                "unidades": 232
            }, {
                "nombre": "arandanos",
                "precio": 48,
                "unidades": 367
            }, {
                "nombre": "brocoli",
                "precio": 11,
                "unidades": 548
            }, {
                "nombre": "calabaza",
                "precio": 14,
                "unidades": 69
            }, {
                "nombre": "canela",
                "precio": 60,
                "unidades": 20
            }, {
                "nombre": "cebolla",
                "precio": 23,
                "unidades": 37
            }, {
                "nombre": "fresa",
                "precio": 45,
                "unidades": 18
            }, {
                "nombre": "kiwi",
                "precio": 31,
                "unidades": 76
            }, {
                "nombre": "limon",
                "precio": 23,
                "unidades": 54
            }, {
                "nombre": "lychee",
                "precio": 210,
                "unidades": 7
            }, {
                "nombre": "maiz",
                "precio": 16,
                "unidades": 128
            }, {
                "nombre": "manzana",
                "precio": 32,
                "unidades": 45
            }, {
                "nombre": "naranja",
                "precio": 19,
                "unidades": 37
            }, {
                "nombre": "papa",
                "precio": 26,
                "unidades": 14
            }, {
                "nombre": "pasta",
                "precio": 17,
                "unidades": 27
            }, {
                "nombre": "pimienta",
                "precio": 36,
                "unidades": 8
            }, {
                "nombre": "repollo",
                "precio": 23,
                "unidades": 76
            }, {
                "nombre": "tomate",
                "precio": 19,
                "unidades": 88
            }, {
                "nombre": "zanahoria",
                "precio": 12,
                "unidades": 41
            }], (error, result) => {
                console.log("Resultado de insert: " + result.toString());
            })
        }
    })
}
