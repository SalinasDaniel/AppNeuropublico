import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from "../../config/url.servicios";

@Injectable()
export class ProductosProvider {

  pagina:number = 0;
  productos:any[] = [];

  constructor(public http: HttpClient) {
    // console.log('Hello ProductosProvider Provider');
    this.cargar_todos();
  }

  cargar_todos() {

    let promesa = new Promise( (resolve, reject)=>{

      let url = URL_SERVICIOS + "/productos/todos/" + this.pagina;
      
      this.http.get( url )
               .map( resp => resp)
               .subscribe( (data:any)=>{
  
                  if ( data.error ){
                     // aqui hay un problema
                  }else{

                    let nuevaData = this.agrupar( data.Productos, 2 );

                    this.productos.push( ...nuevaData );
                    this.pagina +=1;
                  }
                  
                  resolve();

               })
  
      });

    return promesa;

  }

  private agrupar( arr:any, tamano:number ){

    let nuevoArreglo = [];
    for (let i =0; i<arr.length; i+=tamano){

      nuevoArreglo.push( arr.slice(i, i+tamano) );
    }
    console.log( nuevoArreglo );
    return nuevoArreglo;

  }

}
