const mongoose = require('mongoose');
const modelos = require('./modelos.js');
const Usuario = modelos.Usuario;
const Producto = modelos.Producto;

let url = "mongodb://localhost/tienda_angular";
mongoose.connect(url, {useNewUrlParser:true});
mongoose.connection.on('error', (error)=>{
  console.log("(!) ERROR al conectar con mongo");
  process.exit();
});

let usuarios = [
  {email:"ariel@nextu.com", contrasena:"prueba123"},
  {email:"pau@nextu.com", contrasena:"prueba321"},
  {email:"lupita@nextu.com", contrasena:"12345"},
  {email:"bee@nextu.com", contrasena:"54321"}
];

let productos = [
  {nombre:"Aguacate", precio:30, stock:rand(), nombreArchivo:"aguacate.jpg"},
  {nombre:"Ajo", precio:12, stock:rand(), nombreArchivo:"ajo.jpg"},
  {nombre:"Almendras", precio:157, stock:rand(), nombreArchivo:"almendras.jpg"},
  {nombre:"Arándanos", precio:48, stock:rand(), nombreArchivo:"arandanos.jpg"},
  {nombre:"Brócoli", precio:11, stock:rand(), nombreArchivo:"brocoli.jpg"},
  {nombre:"Calabaza", precio:14, stock:rand(), nombreArchivo:"calabaza.jpg"},
  {nombre:"Canela", precio:60, stock:rand(), nombreArchivo:"canela.jpg"},
  {nombre:"Cebolla", precio:23, stock:rand(), nombreArchivo:"cebolla.jpg"},
  {nombre:"Fresa", precio:45, stock:rand(), nombreArchivo:"fresa.jpg"},
  {nombre:"Kiwi", precio:31, stock:rand(), nombreArchivo:"kiwi.jpg"},
  {nombre:"Limón", precio: 23, stock:rand(), nombreArchivo:"limon.jpg"},
  {nombre:"Lychee", precio:210, stock:rand(), nombreArchivo:"lychee.jpg"},
  {nombre:"Maíz", precio:16, stock:rand(), nombreArchivo:"maiz.jpg"},
  {nombre:"Manzana", precio:28, stock:rand(), nombreArchivo:"manzana.jpg"},
  {nombre:"Naranja", precio:19, stock:rand(), nombreArchivo:"naranja.jpg"},
  {nombre:"Papa", precio:13, stock:rand(), nombreArchivo:"papa.jpg"},
  {nombre:"Pasta", precio:17, stock:rand(), nombreArchivo:"pasta.jpg"},
  {nombre:"Pimienta", precio:36, stock:rand(), nombreArchivo:"pimienta.jpg"},
  {nombre:"Repollo", precio:23, stock:rand(), nombreArchivo:"repollo.jpg"},
  {nombre:"Tomate", precio:19, stock:rand(), nombreArchivo:"tomate.jpg"},
  {nombre:"Zanahoria", precio:12, stock:rand(), nombreArchivo:"zanahoria.jpg"}
];

function crearUsuarios(){
  let ususCreados = 0;

  for(let i = 0; i<usuarios.length; i++){
    let usu = usuarios[i];

    Usuario.find({email:usu.email}, (error, resultado)=>{
      if(resultado.length == 0){
        let usuNuevo = new Usuario({email:usu.email, contrasena:usu.contrasena});
        usuNuevo.save((error)=>{
          if(error){
            console.log("Error al crear usuario.");
          } else {
            console.log("Usuario "+usu.email+" creado exitosamente.");
          }

          ususCreados++;
          if(ususCreados == usuarios.length){
            console.log("...");
            crearProductos();
          }
        });
      } else {
        console.log("El usuario "+usu.nombre+" ya existe en la base de datos.");
        ususCreados++;
        if(ususCreados == usuarios.length){
          console.log("...");
          crearProductos();
        }
      }
    });
  }
}

function rand(){
  return Math.floor(Math.random()*96 + 10);
}

function crearProductos(){
  let prodsCreados = 0;

  for(let i = 0; i<productos.length; i++){
    let prod = productos[i];
    Producto.find({nombre:prod.nombre}, (error, resultado)=>{
      if(resultado.length == 0){
        let prodNuevo = new Producto({nombre:prod.nombre, precio:prod.precio, stock:prod.stock, nombreArchivo:prod.nombreArchivo});
        prodNuevo.save((error)=>{
          if(error){
            console.log("Error al crear producto.");
          } else {
            console.log("Producto "+prod.nombre+" creado exitosamente.");
          }

          prodsCreados++;
          if(prodsCreados == productos.length){
            console.log("Fin.");
            process.exit();
          }
        });
      } else {
        console.log("El producto "+prod.nombre+" ya existe en la base de datos.");
        prodsCreados++;
        if(prodsCreados == productos.length){
          console.log("Fin.");
          process.exit();
        }
      }
    });
  }
}

crearUsuarios();
