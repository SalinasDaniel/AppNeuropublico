import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductosProvider } from "../../providers/productos/productos";
import { ProductoPage } from "../index.paginas";

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  productoPage = ProductoPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ps:ProductosProvider) {
  }

  buscar_productos( ev: any ){

    const valor = ev.target.value;
    console.log(valor);

    this._ps.buscar_producto( valor );

  }
  


}
