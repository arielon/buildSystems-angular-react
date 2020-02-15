const mongoose = require('mongoose');
const modelos = require("./modelos.js");
const ObjectId = mongoose.Types.ObjectId;
const Usuario = modelos.Usuario;
const Producto = modelos.Producto;
const router = require('express').Router();

router.post("/login", function(req, res){
  Usuario.find({email:req.body.email}, (err, resultado)=>{
    if(err){
      res.send({exito:false, msjError:"El servidor de la Base de Datos (mongo) no está disponible", error:err});
    } else {
      if(resultado.length == 0){
        res.send({exito:false, msjError:"El usuario "+req.body.email+" no existe en la base de datos"});
      } else {
        if(resultado[0].contrasena == req.body.contrasena){
          req.session.logueado = true;
          req.session.email = req.body.email;
          console.log("El usuario "+req.session.email+" se ha logueado");
          res.send({exito:true});
        } else {
          res.send({exito:false, msjError:"La contraseña es incorrecta"});
        }
      }
    }
  });
});

router.post("/logout", function(req, res){
  req.session.destroy();
  res.send({exito:true});
})

router.post("/getSesion", function(req, res){
  let usuarioLogueado = req.session.logueado ? req.session.email : "";
  res.send({usuarioLogueado:usuarioLogueado, exito:true});
});

router.post("/productos", function(req, res){
  Producto.find({}, (error, resultado)=>{
    if(error){
      res.send({exito:false, msjError:"El servidor de la Base de Datos (mongo) no está disponible", error:error});
    } else {
      if(resultado.length == 0){
        res.send({exito:false, msjError:"No se pudieron encontrar productos en la base de datos."});
      } else {
        res.send({exito:true, productos:resultado});
      }
    }
  });
});

router.post("/productos/detalle", function(req, res){
  Producto.find({_id:req.body.idProducto}, (error, resultado)=>{
    if(error){
      res.send({exito:false, msjError:"El servidor de la Base de Datos (mongo) no está disponible", error:error});
    } else {
      if(resultado.length == 0){
        res.send({exito:false, msjError:"No se pudo encontrar el producto especificado en la base de datos."});
      } else {
        res.send({exito:true, producto:resultado[0]});
      }
    }
  });
});

router.post("/carrito/actualizar", function(req, res){
  if(!req.session.logueado){
    res.send({exito:false, msjError:"nohaylogin"});
  } else {

    let prodsCarritoNuevos = req.body.listaProdsCarrito;
    Usuario.updateOne({email:req.session.email},{prodsCarrito:prodsCarritoNuevos}, (error, resultado)=>{
      if(error){
        res.send({exito:false, msjError:"El servidor de la Base de Datos (mongo) no está disponible", error:error});
      } else {
        if(resultado.n == 0){
          res.send({exito:false, msjError:"No se encontró al usuario logueado en la base de datos...?"});
        } else if(resultado.ok == 0){
          res.send({exito:false, msjError:"No se pudo actualizar el usuario en la base de datos."});
        } else {
          res.send({exito:true});
        }
      }
    });
  }
});
router.post("/carrito/getListaProds", function(req, res){
  if(!req.session.logueado){
    res.send({exito:false, msjError:"nohaylogin"});
  } else {
    Usuario.find({email:req.session.email}, (error, resultado)=>{
      if(error){
        res.send({exito:false, msjError:"El servidor de la Base de Datos (mongo) no está disponible", error:error});
      } else {
        res.send({exito:true, prodsCarrito:resultado[0].prodsCarrito});
      }
    });
  }
})

router.post("/carrito/pagar", function(req, res){
  if(!req.session.logueado){
    res.send({exito:false, msjError:"nohaylogin"});
  } else {
    Usuario.find({email:req.session.email}, (error, resultado)=>{
      if(error){
        res.send({exito:false, msjError:"El servidor de la Base de Datos (mongo) no está disponible", error:error});
      } else {
        let prodsCarritoBD = resultado[0].prodsCarrito;
        let errorProducto = false;

        let queryFiltro = [];

        for(let i=0; i<prodsCarritoBD.length; i++){
          queryFiltro.push(ObjectId(prodsCarritoBD[i].idProducto));
        }

        Producto.find({_id:{ $in:queryFiltro}}, (error, resultado)=>{
          if(error){
            //ERROR
            res.send({exito:false, msjError:"Error al buscar los productos en la Base de Datos", error:error});
          } else {
            if(resultado.length < prodsCarritoBD.length){
              res.send({exito:false, msjError:"Al menos uno de los productos requeridos ya no existe en la BD"});
            } else {
              let noAlcanzaStock = false;

              for(let i=0; i<resultado.length; i++){

                let prodCarritoCorrespondiente;
                for(let j=0; j<prodsCarritoBD.length; j++){
                  if(prodsCarritoBD[j].idProducto == resultado[i]._id){
                    prodCarritoCorrespondiente = prodsCarritoBD[j];
                    break;
                  }
                }

                if(resultado[i].stock < prodCarritoCorrespondiente.cantidad){
                  noAlcanzaStock = true;
                  break;
                }
              }

              if(noAlcanzaStock){
                res.send({exito:false, msjError:"No hay suficiente stock para uno de los productos."});
              } else {

                let sesion;
                mongoose.startSession().then((_sesion)=>{
                  sesion = _sesion;
                  sesion.startTransaction();

                  let todoCorrecto = true;
                  let cantProductosActualizados = 0;

                  let unError = null;
                  let mensajesError = "";

                  for(let i=0; i<prodsCarritoBD.length; i++){
                    Producto.updateOne(
                      {_id:prodsCarritoBD[i].idProducto},
                      {$inc:{stock:-prodsCarritoBD[i].cantidad},},
                      (error, resultado)=>{
                        if(error){
                          unError = error;
                          mensajesError += " | Error al actualizar stock del producto cuya id es "+prodsCarritoBD[i].idProducto;
                          todoCorrecto = false;
                        } else {
                          if(!resultado.ok){
                            mensajesError += " | No se pudo actualizar stock del producto cuya id es "+prodsCarritoBD[i].idProducto;
                            todoCorrecto = false;
                          }
                        }

                        cantProductosActualizados++;
                        if(cantProductosActualizados == prodsCarritoBD.length){
                          if(todoCorrecto){
                            Usuario.updateOne({email:req.session.email},{prodsCarrito:[]}, (error, resultado)=>{
                              if(error){
                                sesion.abortTransaction();
                                res.send({exito:false, msjError:mensajesError, error:error});
                              } else {
                                sesion.commitTransaction();
                                res.send({exito:true});
                              }
                            })
                          } else {
                            sesion.abortTransaction();
                            res.send({exito:false, msjError:mensajesError, error:unError});
                          }
                        }
                      }
                    );
                  }
                });
              }
            }
          }
        })
      }
    });
  }
})

module.exports = router;
