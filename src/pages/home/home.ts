import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductosProvider } from "../../providers/productos/productos";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private _ps: ProductosProvider) {
                

  }

  siguiente_pagina( infiniteScroll ){

    this._ps.cargar_todos()
          .then( ()=> {

            infiniteScroll.complete();

          })

  }

}
