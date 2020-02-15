import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionBDService } from './conexion-bd.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteTiendaService {
  constructor(
    private conexionBDService:ConexionBDService,
    private router:Router
  ){
    this.getSesion();
  }

  estadoLogin:number = 0;
  usuarioLogueado:string = "";
  productosCarrito = [];
  funcCargarCarrito = null;

  getSesion(){
    this.conexionBDService.verificarSesion((respuesta)=>{
      if(respuesta.exito){
        if(respuesta.usuarioLogueado == ""){
          this.estadoLogin = 1;
          this.usuarioLogueado = "";
        } else {
          this.estadoLogin = 2; //Usuario logueado
          this.usuarioLogueado = respuesta.usuarioLogueado;
          this.getCarritoSesion();
        }
      } else {
        this.estadoLogin = 3;
        this.usuarioLogueado = "";
      }
    });
  }

  getCarritoSesion(){
    this.conexionBDService.obtenerCarrito((respuesta)=>{
      if(respuesta.exito){
        this.productosCarrito = respuesta.prodsCarrito;
        console.log("Carrito recuperado de la última sesión de "+this.usuarioLogueado);
        if(this.funcCargarCarrito != null){
          this.funcCargarCarrito();
        }
      } else {
        console.log(respuesta.msjError);
        console.log(respuesta.error);
      }
    });
  }

  cambiarPagina(url){
    this.router.navigate([url]);
    this.getSesion();
  }

  anadirProductoCarrito(idProducto, cantidad){
    let prodsCarrito = this.productosCarrito;
    let existeProducto = false;

    for(let i = 0; i < prodsCarrito.length; i++){
      if(prodsCarrito[i].idProducto == idProducto){
        existeProducto = true;
        if(cantidad == 0){
          prodsCarrito.splice(i,1);
        } else {
          prodsCarrito[i].cantidad = cantidad;
        }
        break;
      }
    }
    if(!existeProducto){
      //AÑADIR
      prodsCarrito.push({idProducto:idProducto, cantidad:cantidad});
    }
    this.productosCarrito = prodsCarrito;

    this.conexionBDService.actualizarCarrito(prodsCarrito, (respuesta)=>{
      if(respuesta.exito){
        console.log("Carrito online de "+this.usuarioLogueado+" actualizado.");
      } else {
        if(respuesta.msjError == "nohaylogin"){
          console.log("No hay usuario logueado. Usando carrito offline.")
        } else {
          console.log(respuesta.msjError);
        }
      }
    });
  }

  estaEnCarrito(idProducto){
    for(let i=0; i<this.productosCarrito.length; i++){
      if(this.productosCarrito[i].idProducto == idProducto){
        return true;
      }
    }
    return false;
  }

  vaciarCarrito(){
    this.productosCarrito = [];

    this.conexionBDService.actualizarCarrito([], (respuesta)=>{
      if(respuesta.exito){
        console.log("Carrito online de "+this.usuarioLogueado+" vaciado.");
      } else {
        if(respuesta.msjError == "nohaylogin"){
          console.log("No hay usuario logueado. Vaciando carrito offline.")
        } else {
          console.log(respuesta.msjError);
        }
      }
    });
  }

  pagarCarrito(callback){
    console.log(this);
    this.conexionBDService.realizarPago((respuesta)=>{
      if(respuesta.exito){
        this.productosCarrito = [];
        callback(true);
      } else {
        console.log(respuesta.msjError);
        console.log(respuesta.error);
        alert("Error al intentar hacer la compra");
        callback(false);
      }
    });
  }
}
