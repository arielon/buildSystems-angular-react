(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/barra-superior/barra-superior.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/barra-superior/barra-superior.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBarraSuperiorBarraSuperiorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top-bar barraSuperior\">\n  <div class=\"top-bar-left\">\n    <h4>La Bodega</h4>\n  </div>\n  <div class=\"top-bar-right\">\n    <div class=\"menu barraSuperior\">\n      <div class=\"menu-item\">\n        <a [routerLink]=\"['/catalogo']\">\n          <i class=\"fi-thumbnails\"></i> Catálogo\n        </a>\n      </div>\n      <div class=\"menu-item\">\n        <a [routerLink]=\"['/carrito']\">\n          <i class=\"fi-shopping-cart\"></i> Carrito\n          <div class=\"badge iconoNotifCarrito\" *ngIf=\"clienteTiendaService.productosCarrito.length>0\">\n            {{clienteTiendaService.productosCarrito.length}}\n          </div>\n        </a>\n      </div>\n      <div class=\"menu-item\">\n        <a (click)=\"cerrarSesion()\">\n          <i [class]=\"clienteTiendaService.estadoLogin == 2 ? 'fi-x':'fi-home'\"></i>\n          {{clienteTiendaService.estadoLogin == 2 ? \"Cerrar sesión\" : \"Login\"}}\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCarritoCarritoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-x\">\n\n  <div class=\"cell small-12 barra-titulo\">\n    <h4>Carrito</h4>\n  </div>\n\n  <div class=\"cell small-12 medium-6 listaProdsCarrito\">\n    <producto-carrito *ngFor=\"let productoCarrito of productosCarrito\"\n      [idProducto]=\"productoCarrito.idProducto\"\n      [cantidad]=\"productoCarrito.cantidad\"\n      [anadirSubtotal]=\"anadirSubtotal.bind(this)\"\n    ></producto-carrito>\n  </div>\n\n  <div class=\"cell small-12 medium-6\">\n\n    <!--Si se sumaron los productos, y hay al menos uno-->\n    <div class=\"totalCarrito\" *ngIf=\"todosProductosSumados && prodsSumados > 0\">\n\n      <h3><b>Total: </b> ${{totalCarrito}}</h3>\n\n      <div class=\"button btnCancelar\"\n        (click)=\"vaciarCarrito()\">\n        Cancelar <i class=\"fi-x\"></i>\n      </div>\n\n      <div [ngClass]=\"{button:true, btnPagar:logueado, btnDesactivado:!logueado}\"\n        (click)=\"logueado ? pagarCarrito() : null\">\n        Pagar <i class=\"fi-dollar\"></i>\n      </div>\n\n    </div>\n\n    <!--Si faltan sumar productos o no hay ninguno-->\n    <div class=\"totalCarrito\" *ngIf=\"!(todosProductosSumados && prodsSumados > 0)\">\n      <h5>{{ this.todosProductosSumados ? \"No hay productos en el carrito de compras\" : \"...\"}}</h5>\n    </div>\n\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/catalogo.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/catalogo.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCatalogoCatalogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-x\">\n  <div class=\"cell panelPrincipal small-12\">\n\n    <div class=\"grid-x\">\n\n      <div class=\"cell barraTitulo small-12\">\n        <div class=\"grid-x\">\n          <div class=\"cell small-6 medium-7 large-8\">\n            <h4>Catálogo de Productos</h4>\n          </div>\n          <div class=\"cell auto barraBusqueda\">\n            <label><i class=\"fi-magnifying-glass\"></i> Búsqueda</label>\n            <input type=\"search\" (input)=\"cambiaTextoBusqueda($event)\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cell cuadriculaProductos small-12\">\n        <div class=\"grid-x grid-margin-x\">\n          <ng-container *ngFor=\"let producto of productos\">\n            <display-producto\n              *ngIf=\"coincideConFiltro(producto.nombre)\"\n\n              class=\"cell displayProducto small-6 medium-4 large-3\"\n              [idProducto]=\"producto._id\"\n              [srcImagen]=\"'assets/img/'+producto.nombreArchivo\"\n              [nombreProducto]=\"producto.nombre\"\n              [precio]=\"producto.precio\"\n              [stock]=\"producto.stock\"\n\n              [estaEnCarrito]=\"clienteTiendaService.estaEnCarrito(producto._id)\"\n              [cantElegida]=\"clienteTiendaService.estaEnCarrito(producto._id) ? 0 : 1\"\n            ></display-producto>\n          </ng-container>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/display-detallado-producto/display-detallado-producto.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display-detallado-producto/display-detallado-producto.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDisplayDetalladoProductoDisplayDetalladoProductoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-x\">\n  <div class=\"cell panelPrincipal small-12\">\n    <div class=\"grid-x grid-margin-x\">\n      <div class=\"cell barraTitulo small-12\">\n        <h4>{{producto ? producto.nombre : \"...\"}}</h4>\n      </div>\n      <div class=\"cell margenInferior small-12 medium-6\">\n        <img [src]=\"producto ? 'assets/img/'+producto.nombreArchivo : ''\">\n      </div>\n      <div class=\"cell margenInferior small-12 medium-6\">\n        <label class=\"lblProducto\"><b>Precio: $</b>{{producto ? producto.precio : \"...\"}}</label>\n        <label class=\"lblProducto\"><b>Unidades Disponibles: </b>{{producto ? producto.stock : \"...\"}}</label>\n      </div>\n      <div class=\"cell small-12\">\n        <div class=\"button\" (click)=\"clickAtras()\"><i class=\"fi-arrow-left\"></i> Atrás</div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/display-producto/display-producto.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display-producto/display-producto.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDisplayProductoDisplayProductoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div class=\"mitadSuperiorDisplay\" [ngStyle]=\"{backgroundImage:'url('+srcImagen+')'}\">\n    <img [src]=\"srcImagen\"/>\n  </div>\n  <div class=\"mitadInferiorDisplay\">\n    <h4>{{nombreProducto}}</h4>\n    <label class=\"lblProducto\"><b>Precio: $</b> {{precio}}</label>\n    <label class=\"lblProducto\"><b>Unidades Disponibles:</b> {{stock}}</label>\n    <div class=\"grid-x\">\n\n      <div class=\"cell small-12\">\n        <div class=\"button expanded btnVerMas\" (click)=\"clickVerMas()\">Ver más</div>\n      </div>\n\n      <div class=\"cell small-12\">\n        <div class=\"grid-x\">\n\n          <div class=\"cell small-8\">\n            <div [ngClass]=\"'button ' + (stock > 0 ? cantElegida > 0 ? 'btnAnadir' : 'btnCancelar' : 'btnDesactivado')\"\n              (click)=\"stock > 0 ? clickAnadir() : null\">\n              {{\n                stock > 0 ? (\n                estaEnCarrito\n                ?\n                cantElegida == 0 ? 'Quitar' : 'Cambiar'\n                :\n                'Añadir'\n                ) : 'Sin stock'\n              }}\n              <i [ngClass]=\"cantElegida > 0 ? 'fi-shopping-cart':'fi-x'\"></i>\n            </div>\n          </div>\n\n          <div class=\"cell auto\">\n            <input type=\"number\" [min]=\"estaEnCarrito || stock == 0 ? 0 : 1\" [max]=\"stock\"\n              [value]=\"cantElegida\" (change)=\"cambiaCantidad($event)\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form-input/form-input.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-input/form-input.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormInputFormInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<label class=\"subtituloLogin\">{{texto}}:\n  <span class=\"lblError\" *ngIf=\"mostrarMsjError\">({{msjError}})</span>\n  <input [ngClass]=\"{inputError:mostrarMsjError}\" [type]=\"tipo\" [placeholder]=\"placeholder\"\n         (input)=\"actualizarEstado($event.target.value)\">\n</label>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login\">\n  <div class=\"loginFondo\">\n    <div class=\" fluid cubrirAltura\">\n      <div class=\"grid-x align-middle cubrirAltura\">\n        <div class=\"cell small-8 medium-6 large-4 small-offset-2 medium-offset-3 large-offset-4\">\n          <h2 class=\"tituloLogin\">Iniciar Sesión</h2>\n          <form>\n            <form-input #email [texto]=\"'Correo electrónico'\" [tipo]=\"'email'\"\n              [placeholder]=\"'nextu@gmail.com'\" [alCambiarValor]=\"this.cambiaEmail.bind(this)\"></form-input>\n            <form-input #contrasena [texto]=\"'Contraseña'\" [tipo]=\"'password'\"\n              [placeholder]=\"'nextu123'\" [alCambiarValor]=\"this.cambiaContrasena.bind(this)\"></form-input>\n\n            <div type=\"submit\" [ngClass]=\"{button:true, medium:true, disabled:!validCorrecta}\" (click)=\"clickIngresar($event)\">Ingresar</div>\n            <label class=\"text-center lblError\" *ngIf=\"errorEnvio\">{{msjError}}</label>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n<div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagina-principal/pagina-principal.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagina-principal/pagina-principal.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginaPrincipalPaginaPrincipalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n  <div class=\"mainFondo\"></div>\n  <div class=\"grid-container\">\n    <barra-superior></barra-superior>\n\n    <div class=\"grid-x\">\n      <div class=\"cell small-12 panelPrincipal\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/producto-carrito/producto-carrito.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto-carrito/producto-carrito.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductoCarritoProductoCarritoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"cell small-12 productoCarrito\">\n  <div class=\"grid-x grid-margin-x\" *ngIf=\"producto != null\">\n    <div class=\"cell small-4\">\n      <img [src]=\"'assets/img/'+producto.nombreArchivo\">\n    </div>\n    <div class=\"cell small-8\">\n      <label class=\"lblProducto\"><h4>{{producto.nombre}}</h4></label>\n      <label class=\"lblProducto\"><b>Cantidad: </b>{{cantidad}}</label>\n      <label class=\"lblProducto\"><b>Precio Unitario: </b>{{producto.precio}}</label>\n    </div>\n    <div class=\"cell small-12\">\n      <label class=\"lblProducto\"><h5>Subtotal: ${{producto.precio * cantidad}}</h5></label>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _pagina_principal_pagina_principal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pagina-principal/pagina-principal.component */
    "./src/app/pagina-principal/pagina-principal.component.ts");
    /* harmony import */


    var _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./catalogo/catalogo.component */
    "./src/app/catalogo/catalogo.component.ts");
    /* harmony import */


    var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./carrito/carrito.component */
    "./src/app/carrito/carrito.component.ts");
    /* harmony import */


    var _display_detallado_producto_display_detallado_producto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./display-detallado-producto/display-detallado-producto.component */
    "./src/app/display-detallado-producto/display-detallado-producto.component.ts");

    const routes = [{
      path: "",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      pathMatch: 'full'
    }, {
      path: "",
      component: _pagina_principal_pagina_principal_component__WEBPACK_IMPORTED_MODULE_4__["PaginaPrincipalComponent"],
      children: [{
        path: "catalogo",
        component: _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_5__["CatalogoComponent"]
      }, {
        path: "producto/:idProducto",
        component: _display_detallado_producto_display_detallado_producto_component__WEBPACK_IMPORTED_MODULE_7__["DisplayDetalladoProductoComponent"]
      }, {
        path: "carrito",
        component: _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_6__["CarritoComponent"]
      }]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _conexion_bd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./conexion-bd.service */
    "./src/app/conexion-bd.service.ts");

    let AppComponent = class AppComponent {};
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      providers: [_conexion_bd_service__WEBPACK_IMPORTED_MODULE_2__["ConexionBDService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./form-input/form-input.component */
    "./src/app/form-input/form-input.component.ts");
    /* harmony import */


    var _pagina_principal_pagina_principal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pagina-principal/pagina-principal.component */
    "./src/app/pagina-principal/pagina-principal.component.ts");
    /* harmony import */


    var _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./catalogo/catalogo.component */
    "./src/app/catalogo/catalogo.component.ts");
    /* harmony import */


    var _barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./barra-superior/barra-superior.component */
    "./src/app/barra-superior/barra-superior.component.ts");
    /* harmony import */


    var _display_detallado_producto_display_detallado_producto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./display-detallado-producto/display-detallado-producto.component */
    "./src/app/display-detallado-producto/display-detallado-producto.component.ts");
    /* harmony import */


    var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./carrito/carrito.component */
    "./src/app/carrito/carrito.component.ts");
    /* harmony import */


    var _display_producto_display_producto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./display-producto/display-producto.component */
    "./src/app/display-producto/display-producto.component.ts");
    /* harmony import */


    var _producto_carrito_producto_carrito_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./producto-carrito/producto-carrito.component */
    "./src/app/producto-carrito/producto-carrito.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_7__["FormInputComponent"], _pagina_principal_pagina_principal_component__WEBPACK_IMPORTED_MODULE_8__["PaginaPrincipalComponent"], _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_9__["CatalogoComponent"], _barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_10__["BarraSuperiorComponent"], _display_detallado_producto_display_detallado_producto_component__WEBPACK_IMPORTED_MODULE_11__["DisplayDetalladoProductoComponent"], _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_12__["CarritoComponent"], _display_producto_display_producto_component__WEBPACK_IMPORTED_MODULE_13__["DisplayProductoComponent"], _producto_carrito_producto_carrito_component__WEBPACK_IMPORTED_MODULE_14__["ProductoCarritoComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/barra-superior/barra-superior.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/barra-superior/barra-superior.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBarraSuperiorBarraSuperiorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnJhLXN1cGVyaW9yL2JhcnJhLXN1cGVyaW9yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/barra-superior/barra-superior.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/barra-superior/barra-superior.component.ts ***!
    \************************************************************/

  /*! exports provided: BarraSuperiorComponent */

  /***/
  function srcAppBarraSuperiorBarraSuperiorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarraSuperiorComponent", function () {
      return BarraSuperiorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cliente-tienda.service */
    "./src/app/cliente-tienda.service.ts");
    /* harmony import */


    var _conexion_bd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../conexion-bd.service */
    "./src/app/conexion-bd.service.ts");

    let BarraSuperiorComponent = class BarraSuperiorComponent {
      constructor(clienteTiendaService, conexionBDService, router) {
        this.clienteTiendaService = clienteTiendaService;
        this.conexionBDService = conexionBDService;
        this.router = router;
        this.nombreIconoSesion = "";
      }

      cerrarSesion() {
        this.conexionBDService.cerrarSesion(respuesta => {
          this.clienteTiendaService.cambiarPagina('');
        });
      }

    };

    BarraSuperiorComponent.ctorParameters = () => [{
      type: _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__["ClienteTiendaService"]
    }, {
      type: _conexion_bd_service__WEBPACK_IMPORTED_MODULE_4__["ConexionBDService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    BarraSuperiorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'barra-superior',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./barra-superior.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/barra-superior/barra-superior.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./barra-superior.component.css */
      "./src/app/barra-superior/barra-superior.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__["ClienteTiendaService"], _conexion_bd_service__WEBPACK_IMPORTED_MODULE_4__["ConexionBDService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], BarraSuperiorComponent);
    /***/
  },

  /***/
  "./src/app/carrito/carrito.component.css":
  /*!***********************************************!*\
    !*** ./src/app/carrito/carrito.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCarritoCarritoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnJpdG8vY2Fycml0by5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/carrito/carrito.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/carrito/carrito.component.ts ***!
    \**********************************************/

  /*! exports provided: CarritoComponent */

  /***/
  function srcAppCarritoCarritoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarritoComponent", function () {
      return CarritoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cliente-tienda.service */
    "./src/app/cliente-tienda.service.ts");

    let CarritoComponent = class CarritoComponent {
      constructor(clienteTiendaService) {
        this.clienteTiendaService = clienteTiendaService;
        this.totalCarrito = 0;
        this.prodsSumados = 0;
        this.todosProductosSumados = false;
        this.productosCarrito = [];
        this.logueado = false;
      }

      ngOnInit() {
        if (this.clienteTiendaService.productosCarrito.length != 0) {
          this.productosCarrito = this.clienteTiendaService.productosCarrito;
        } else {
          this.clienteTiendaService.funcCargarCarrito = () => {
            this.productosCarrito = this.clienteTiendaService.productosCarrito;

            if (this.productosCarrito.length == 0) {
              this.todosProductosSumados = true;
            }
          };

          this.clienteTiendaService.getCarritoSesion();
        }
      }

      anadirSubtotal(subtotal) {
        let todosProductosSumados = false;

        if (this.productosCarrito && this.productosCarrito.length > 0 && this.prodsSumados == this.productosCarrito.length - 1) {
          //Se ha cargado el último producto
          todosProductosSumados = true;
          this.logueado = this.clienteTiendaService.estadoLogin == 2;
        }

        this.totalCarrito = this.totalCarrito + subtotal;
        this.prodsSumados = this.prodsSumados + 1;
        this.todosProductosSumados = todosProductosSumados;
      }

      vaciarCarrito() {
        this.clienteTiendaService.vaciarCarrito();
        this.totalCarrito = 0;
        this.prodsSumados = 0;
        this.productosCarrito = [];
        this.todosProductosSumados = true;
        this.clienteTiendaService.cambiarPagina("/catalogo");
      }

      pagarCarrito() {
        this.clienteTiendaService.pagarCarrito(exito => {
          if (exito) {
            this.clienteTiendaService.cambiarPagina("/catalogo");
          }
        });
      }

    };

    CarritoComponent.ctorParameters = () => [{
      type: _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__["ClienteTiendaService"]
    }];

    CarritoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carrito',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carrito.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carrito.component.css */
      "./src/app/carrito/carrito.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__["ClienteTiendaService"]])], CarritoComponent);
    /***/
  },

  /***/
  "./src/app/catalogo/catalogo.component.css":
  /*!*************************************************!*\
    !*** ./src/app/catalogo/catalogo.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCatalogoCatalogoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2dvL2NhdGFsb2dvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/catalogo/catalogo.component.ts":
  /*!************************************************!*\
    !*** ./src/app/catalogo/catalogo.component.ts ***!
    \************************************************/

  /*! exports provided: CatalogoComponent */

  /***/
  function srcAppCatalogoCatalogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogoComponent", function () {
      return CatalogoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _conexion_bd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../conexion-bd.service */
    "./src/app/conexion-bd.service.ts");
    /* harmony import */


    var _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cliente-tienda.service */
    "./src/app/cliente-tienda.service.ts");

    let CatalogoComponent = class CatalogoComponent {
      constructor(conexionBDService, clienteTiendaService) {
        this.conexionBDService = conexionBDService;
        this.clienteTiendaService = clienteTiendaService;
        this.filtroBusqueda = "";
      }

      ngOnInit() {
        this.cargarProductos();
      }

      cargarProductos() {
        let respuesta = this.conexionBDService.obtenerProductos(respuesta => {
          if (respuesta.exito) {
            this.productos = respuesta.productos;
          } else {
            console.log("Error al conectar con el servidor: " + respuesta.msjError);
            console.log(respuesta.error);
          }
        });
      }

      cambiaTextoBusqueda(event) {
        this.filtroBusqueda = event.target.value;
      }

      coincideConFiltro(nombreProducto) {
        let filtro = this.filtroBusqueda;

        if (filtro == "") {
          return true;
        } else {
          nombreProducto = nombreProducto.toLowerCase();
          filtro = filtro.toLowerCase();
          nombreProducto = nombreProducto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          filtro = filtro.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          return nombreProducto.includes(filtro);
        }
      }

    };

    CatalogoComponent.ctorParameters = () => [{
      type: _conexion_bd_service__WEBPACK_IMPORTED_MODULE_2__["ConexionBDService"]
    }, {
      type: _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__["ClienteTiendaService"]
    }];

    CatalogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'catalogo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./catalogo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogo/catalogo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./catalogo.component.css */
      "./src/app/catalogo/catalogo.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conexion_bd_service__WEBPACK_IMPORTED_MODULE_2__["ConexionBDService"], _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__["ClienteTiendaService"]])], CatalogoComponent);
    /***/
  },

  /***/
  "./src/app/cliente-tienda.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/cliente-tienda.service.ts ***!
    \*******************************************/

  /*! exports provided: ClienteTiendaService */

  /***/
  function srcAppClienteTiendaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteTiendaService", function () {
      return ClienteTiendaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./conexion-bd.service */
    "./src/app/conexion-bd.service.ts");

    let ClienteTiendaService = class ClienteTiendaService {
      constructor(conexionBDService, router) {
        this.conexionBDService = conexionBDService;
        this.router = router;
        this.estadoLogin = 0;
        this.usuarioLogueado = "";
        this.productosCarrito = [];
        this.funcCargarCarrito = null;
        this.getSesion();
      }

      getSesion() {
        this.conexionBDService.verificarSesion(respuesta => {
          if (respuesta.exito) {
            if (respuesta.usuarioLogueado == "") {
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

      getCarritoSesion() {
        this.conexionBDService.obtenerCarrito(respuesta => {
          if (respuesta.exito) {
            this.productosCarrito = respuesta.prodsCarrito;
            console.log("Carrito recuperado de la última sesión de " + this.usuarioLogueado);

            if (this.funcCargarCarrito != null) {
              this.funcCargarCarrito();
            }
          } else {
            console.log(respuesta.msjError);
            console.log(respuesta.error);
          }
        });
      }

      cambiarPagina(url) {
        this.router.navigate([url]);
        this.getSesion();
      }

      anadirProductoCarrito(idProducto, cantidad) {
        let prodsCarrito = this.productosCarrito;
        let existeProducto = false;

        for (let i = 0; i < prodsCarrito.length; i++) {
          if (prodsCarrito[i].idProducto == idProducto) {
            existeProducto = true;

            if (cantidad == 0) {
              prodsCarrito.splice(i, 1);
            } else {
              prodsCarrito[i].cantidad = cantidad;
            }

            break;
          }
        }

        if (!existeProducto) {
          //AÑADIR
          prodsCarrito.push({
            idProducto: idProducto,
            cantidad: cantidad
          });
        }

        this.productosCarrito = prodsCarrito;
        this.conexionBDService.actualizarCarrito(prodsCarrito, respuesta => {
          if (respuesta.exito) {
            console.log("Carrito online de " + this.usuarioLogueado + " actualizado.");
          } else {
            if (respuesta.msjError == "nohaylogin") {
              console.log("No hay usuario logueado. Usando carrito offline.");
            } else {
              console.log(respuesta.msjError);
            }
          }
        });
      }

      estaEnCarrito(idProducto) {
        for (let i = 0; i < this.productosCarrito.length; i++) {
          if (this.productosCarrito[i].idProducto == idProducto) {
            return true;
          }
        }

        return false;
      }

      vaciarCarrito() {
        this.productosCarrito = [];
        this.conexionBDService.actualizarCarrito([], respuesta => {
          if (respuesta.exito) {
            console.log("Carrito online de " + this.usuarioLogueado + " vaciado.");
          } else {
            if (respuesta.msjError == "nohaylogin") {
              console.log("No hay usuario logueado. Vaciando carrito offline.");
            } else {
              console.log(respuesta.msjError);
            }
          }
        });
      }

      pagarCarrito(callback) {
        console.log(this);
        this.conexionBDService.realizarPago(respuesta => {
          if (respuesta.exito) {
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

    };

    ClienteTiendaService.ctorParameters = () => [{
      type: _conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__["ConexionBDService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ClienteTiendaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__["ConexionBDService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ClienteTiendaService);
    /***/
  },

  /***/
  "./src/app/conexion-bd.service.ts":
  /*!****************************************!*\
    !*** ./src/app/conexion-bd.service.ts ***!
    \****************************************/

  /*! exports provided: ConexionBDService */

  /***/
  function srcAppConexionBdServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConexionBDService", function () {
      return ConexionBDService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ConexionBDService = class ConexionBDService {
      constructor(httpClient) {
        this.httpClient = httpClient;
        this.urlBase = "http://localhost:3000";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
        this.options = {
          headers: this.httpHeaders,
          withCredentials: true,
          observe: "response"
        };
      }

      llamadaAjax(ruta, datos, callback) {
        let obsvRespuesta = this.httpClient.post(this.urlBase + ruta, datos, this.options);
        obsvRespuesta.subscribe(respuesta => {
          callback(respuesta.body ? respuesta.body : respuesta);
        }, error => {
          callback({
            exito: false,
            msjError: "No se pudo conectar con el servidor",
            error: error
          });
        });
      }

      intentarLogin(email, contrasena, callback) {
        let datos = JSON.stringify({
          email: email,
          contrasena: contrasena
        });
        this.llamadaAjax("/login", datos, callback);
      }

      cerrarSesion(callback) {
        this.llamadaAjax("/logout", "", callback);
      }

      verificarSesion(callback) {
        this.llamadaAjax("/getSesion", "", callback);
      }

      obtenerProductos(callback) {
        this.llamadaAjax("/productos", "", callback);
      }

      obtenerDetalleProducto(idProducto, callback) {
        let datos = JSON.stringify({
          idProducto: idProducto
        });
        this.llamadaAjax("/productos/detalle", datos, callback);
      }

      obtenerCarrito(callback) {
        this.llamadaAjax("/carrito/getListaProds", "", callback);
      }

      actualizarCarrito(listaProdsCarrito, callback) {
        let datos = JSON.stringify({
          listaProdsCarrito: listaProdsCarrito
        });
        this.llamadaAjax("/carrito/actualizar", datos, callback);
      }

      realizarPago(callback) {
        this.llamadaAjax("/carrito/pagar", "", callback);
      }

    };

    ConexionBDService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ConexionBDService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ConexionBDService);
    /***/
  },

  /***/
  "./src/app/display-detallado-producto/display-detallado-producto.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/display-detallado-producto/display-detallado-producto.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDisplayDetalladoProductoDisplayDetalladoProductoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktZGV0YWxsYWRvLXByb2R1Y3RvL2Rpc3BsYXktZGV0YWxsYWRvLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/display-detallado-producto/display-detallado-producto.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/display-detallado-producto/display-detallado-producto.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DisplayDetalladoProductoComponent */

  /***/
  function srcAppDisplayDetalladoProductoDisplayDetalladoProductoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayDetalladoProductoComponent", function () {
      return DisplayDetalladoProductoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../conexion-bd.service */
    "./src/app/conexion-bd.service.ts");
    /* harmony import */


    var _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../cliente-tienda.service */
    "./src/app/cliente-tienda.service.ts");

    let DisplayDetalladoProductoComponent = class DisplayDetalladoProductoComponent {
      constructor(route, conexionBDService, clienteTiendaService) {
        this.route = route;
        this.conexionBDService = conexionBDService;
        this.clienteTiendaService = clienteTiendaService;
        this.producto = null;
      }

      ngOnInit() {
        let id = this.route.snapshot.paramMap.get('idProducto');
        this.cargarProducto(id);
      }

      cargarProducto(idProducto) {
        this.conexionBDService.obtenerDetalleProducto(idProducto, respuesta => {
          if (respuesta.exito) {
            this.producto = respuesta.producto;
          } else {
            console.log("Error al conectar con el servidor: " + respuesta.msjError);
            console.log(respuesta.error);
          }
        });
      }

      clickAtras() {
        this.clienteTiendaService.cambiarPagina("/catalogo");
      }

    };

    DisplayDetalladoProductoComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__["ConexionBDService"]
    }, {
      type: _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_4__["ClienteTiendaService"]
    }];

    DisplayDetalladoProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'display-detallado-producto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./display-detallado-producto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/display-detallado-producto/display-detallado-producto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./display-detallado-producto.component.css */
      "./src/app/display-detallado-producto/display-detallado-producto.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__["ConexionBDService"], _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_4__["ClienteTiendaService"]])], DisplayDetalladoProductoComponent);
    /***/
  },

  /***/
  "./src/app/display-producto/display-producto.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/display-producto/display-producto.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDisplayProductoDisplayProductoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktcHJvZHVjdG8vZGlzcGxheS1wcm9kdWN0by5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/display-producto/display-producto.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/display-producto/display-producto.component.ts ***!
    \****************************************************************/

  /*! exports provided: DisplayProductoComponent */

  /***/
  function srcAppDisplayProductoDisplayProductoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayProductoComponent", function () {
      return DisplayProductoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cliente-tienda.service */
    "./src/app/cliente-tienda.service.ts");

    let DisplayProductoComponent = class DisplayProductoComponent {
      constructor(clienteTiendaService) {
        this.clienteTiendaService = clienteTiendaService;
        this.cantElegida = 1;
        this.estaEnCarrito = false;
      }

      clickVerMas() {
        this.clienteTiendaService.cambiarPagina("/producto/" + this.idProducto);
      }

      clickAnadir() {
        this.clienteTiendaService.anadirProductoCarrito(this.idProducto, this.cantElegida);
        this.estaEnCarrito = this.cantElegida > 0;
        this.cantElegida = this.cantElegida == 0 ? 1 : 0;
      }

      cambiaCantidad(event) {
        this.cantElegida = event.target.value;
      }

    };

    DisplayProductoComponent.ctorParameters = () => [{
      type: _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__["ClienteTiendaService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DisplayProductoComponent.prototype, "idProducto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DisplayProductoComponent.prototype, "srcImagen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DisplayProductoComponent.prototype, "nombreProducto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DisplayProductoComponent.prototype, "precio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DisplayProductoComponent.prototype, "stock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DisplayProductoComponent.prototype, "cantElegida", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], DisplayProductoComponent.prototype, "estaEnCarrito", void 0);
    DisplayProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'display-producto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./display-producto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/display-producto/display-producto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./display-producto.component.css */
      "./src/app/display-producto/display-producto.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__["ClienteTiendaService"]])], DisplayProductoComponent);
    /***/
  },

  /***/
  "./src/app/form-input/form-input.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/form-input/form-input.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormInputFormInputComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0taW5wdXQvZm9ybS1pbnB1dC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/form-input/form-input.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/form-input/form-input.component.ts ***!
    \****************************************************/

  /*! exports provided: FormInputComponent */

  /***/
  function srcAppFormInputFormInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormInputComponent", function () {
      return FormInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FormInputComponent = class FormInputComponent {
      constructor() {
        this.mostrarMsjError = false;
        this.valorIngresado = "";
        this.validCorrecta = false;
        this.msjError = "Error de prueba";
      }

      actualizarEstado(valorIngresado) {
        if (valorIngresado == "") {
          this.msjError = "Campo no puede estar vacío";
          this.validCorrecta = false;
          this.mostrarMsjError = true;
        } else if (this.tipo == "email" && !this.validateEmail(valorIngresado)) {
          this.msjError = "Formato de correo incorrecto";
          this.validCorrecta = false;
          this.mostrarMsjError = true;
        } else {
          this.validCorrecta = true;
          this.mostrarMsjError = false;
        }

        this.valorIngresado = valorIngresado;
        this.alCambiarValor(this.valorIngresado, this.validCorrecta);
      }

      validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FormInputComponent.prototype, "texto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FormInputComponent.prototype, "tipo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FormInputComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FormInputComponent.prototype, "alCambiarValor", void 0);
    FormInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'form-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form-input/form-input.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-input.component.css */
      "./src/app/form-input/form-input.component.css")).default]
    })], FormInputComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cliente-tienda.service */
    "./src/app/cliente-tienda.service.ts");
    /* harmony import */


    var _conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../conexion-bd.service */
    "./src/app/conexion-bd.service.ts");

    let LoginComponent = class LoginComponent {
      constructor(conexionBDService, clienteTiendaService) {
        this.conexionBDService = conexionBDService;
        this.clienteTiendaService = clienteTiendaService;
        this.validCorrecta = false;
        this.errorEnvio = false;
        this.exitoLogin = false;
        this.msjError = "";
        this.emailIngresado = "";
        this.contrasenaIngresada = "";
        this.emailValidCorrecta = false;
        this.contrasenaValidCorrecta = false;
      }

      cambiaEmail(email, esValido) {
        this.emailIngresado = email;
        this.emailValidCorrecta = esValido;
        this.verificarValidarDatos();
      }

      cambiaContrasena(contrasena, esValido) {
        this.contrasenaIngresada = contrasena;
        this.contrasenaValidCorrecta = esValido;
        this.verificarValidarDatos();
      }

      verificarValidarDatos() {
        if (!this.validCorrecta && this.emailValidCorrecta && this.contrasenaValidCorrecta) {
          this.validCorrecta = true;
        } else if (this.validCorrecta && (!this.emailValidCorrecta || !this.contrasenaValidCorrecta)) {
          this.validCorrecta = false;
        }
      }

      intentarLogin(callback) {
        let email = this.emailIngresado;
        let contrasena = this.contrasenaIngresada;
        this.conexionBDService.intentarLogin(email, contrasena, respuesta => {
          callback(respuesta);
        });
      }

      clickIngresar(event) {
        event.preventDefault();
        this.intentarLogin(resultado => {
          if (resultado.exito) {
            console.log("Usuario " + this.emailIngresado + " logueado");
            this.exitoLogin = true;
            this.errorEnvio = false;
            this.clienteTiendaService.cambiarPagina("/catalogo");
          } else {
            if (this.msjError == resultado.msjError) {
              resultado.msjError = "*** " + resultado.msjError + " ***";
            }

            if (resultado.error) {
              console.log(resultado.error);
            }

            this.errorEnvio = true;
            this.msjError = resultado.msjError;
          }
        });
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__["ConexionBDService"]
    }, {
      type: _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__["ClienteTiendaService"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conexion_bd_service__WEBPACK_IMPORTED_MODULE_3__["ConexionBDService"], _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_2__["ClienteTiendaService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pagina-principal/pagina-principal.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/pagina-principal/pagina-principal.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginaPrincipalPaginaPrincipalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1wcmluY2lwYWwvcGFnaW5hLXByaW5jaXBhbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagina-principal/pagina-principal.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pagina-principal/pagina-principal.component.ts ***!
    \****************************************************************/

  /*! exports provided: PaginaPrincipalComponent */

  /***/
  function srcAppPaginaPrincipalPaginaPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginaPrincipalComponent", function () {
      return PaginaPrincipalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PaginaPrincipalComponent = class PaginaPrincipalComponent {
      constructor() {}

    };
    PaginaPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'pagina-principal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagina-principal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagina-principal/pagina-principal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagina-principal.component.css */
      "./src/app/pagina-principal/pagina-principal.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PaginaPrincipalComponent);
    /***/
  },

  /***/
  "./src/app/producto-carrito/producto-carrito.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/producto-carrito/producto-carrito.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductoCarritoProductoCarritoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvLWNhcnJpdG8vcHJvZHVjdG8tY2Fycml0by5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/producto-carrito/producto-carrito.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/producto-carrito/producto-carrito.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProductoCarritoComponent */

  /***/
  function srcAppProductoCarritoProductoCarritoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductoCarritoComponent", function () {
      return ProductoCarritoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _conexion_bd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../conexion-bd.service */
    "./src/app/conexion-bd.service.ts");
    /* harmony import */


    var _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cliente-tienda.service */
    "./src/app/cliente-tienda.service.ts");

    let ProductoCarritoComponent = class ProductoCarritoComponent {
      constructor(conexionBDService, clienteTiendaService) {
        this.conexionBDService = conexionBDService;
        this.clienteTiendaService = clienteTiendaService;
        this.producto = null;
      }

      ngOnInit() {
        this.cargarProducto(this.idProducto);
      }

      cargarProducto(idProducto) {
        this.conexionBDService.obtenerDetalleProducto(idProducto, respuesta => {
          if (respuesta.exito) {
            this.producto = respuesta.producto;
            this.anadirSubtotal(respuesta.producto.precio * this.cantidad);
          } else {
            console.log("Error al conectar con el servidor: " + respuesta.msjError);
            console.log(respuesta.error);
          }
        });
      }

    };

    ProductoCarritoComponent.ctorParameters = () => [{
      type: _conexion_bd_service__WEBPACK_IMPORTED_MODULE_2__["ConexionBDService"]
    }, {
      type: _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__["ClienteTiendaService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProductoCarritoComponent.prototype, "idProducto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], ProductoCarritoComponent.prototype, "cantidad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProductoCarritoComponent.prototype, "anadirSubtotal", void 0);
    ProductoCarritoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'producto-carrito',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./producto-carrito.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/producto-carrito/producto-carrito.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./producto-carrito.component.css */
      "./src/app/producto-carrito/producto-carrito.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conexion_bd_service__WEBPACK_IMPORTED_MODULE_2__["ConexionBDService"], _cliente_tienda_service__WEBPACK_IMPORTED_MODULE_3__["ClienteTiendaService"]])], ProductoCarritoComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/ADMWRK-07/Desktop/proyectos react/buildSystems-angular-react/Angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map