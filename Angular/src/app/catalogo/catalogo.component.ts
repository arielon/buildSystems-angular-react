import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from '../conexion-bd.service';
import { ClienteTiendaService } from '../cliente-tienda.service';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos;
  filtroBusqueda:string = "";

  constructor(
    private conexionBDService:ConexionBDService,
    private clienteTiendaService:ClienteTiendaService
  ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(){
    let respuesta = this.conexionBDService.obtenerProductos((respuesta)=>{
      if(respuesta.exito){
        this.productos = respuesta.productos;
      } else {
        console.log("Error al conectar con el servidor: "+respuesta.msjError);
        console.log(respuesta.error);
      }
    });
  }

  cambiaTextoBusqueda(event){
    this.filtroBusqueda = event.target.value;
  }

  coincideConFiltro(nombreProducto){
    let filtro = this.filtroBusqueda;
    if(filtro == ""){
      return true;
    } else {

      nombreProducto = nombreProducto.toLowerCase();
      filtro = filtro.toLowerCase();

      nombreProducto = nombreProducto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      filtro = filtro.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

      return nombreProducto.includes(filtro);
    }
  }
}
