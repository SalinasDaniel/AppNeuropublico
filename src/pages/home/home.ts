import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductosProvider } from "../../providers/productos/productos";
import { CarritoProvider } from "../../providers/carrito/carrito"

import { ProductoPage } from '../producto/producto';
import { UsuarioProvider } from "../../providers/usuario/usuario"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoPage = ProductoPage;

  constructor(public navCtrl: NavController,
              private _ps: ProductosProvider,
              private _cs:CarritoProvider,
              private _us: UsuarioProvider) {
                

  }

  siguiente_pagina( infiniteScroll ){

    this._ps.cargar_todos()
          .then( ()=> {

            infiniteScroll.complete();

          })

  }

}
