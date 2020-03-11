import { Component, OnInit, HostListener } from "@angular/core";
import { ProductCardComponent } from '../product-card/product-card.component';

export interface Producto {
  idProducto: String;
}

@Component({
  selector: "app-productgrid",
  templateUrl: "./productgrid.component.html",
  styleUrls: ["./productgrid.component.scss"]
})
export class ProductgridComponent implements OnInit {

  numColumnas: number = 4;

  productos: Producto[] = [
    { idProducto: "producto1" },
    { idProducto: "producto2" },
    { idProducto: "producto3" },
    { idProducto: "producto4" },
    { idProducto: "producto5" },
    { idProducto: "producto6" },
    { idProducto: "producto7" },
    { idProducto: "producto8" },
    { idProducto: "producto9" },
    { idProducto: "producto10" },
    { idProducto: "producto11" },
    { idProducto: "producto12" },
    { idProducto: "producto13" },
    { idProducto: "producto14" }
  ];

  constructor() {}

  ngOnInit(): void {
  	this.adaptarContenido(window.innerWidth);
  }

  ngAfterViewInit(): void{
    this.adaptarContenido(window.innerWidth);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.adaptarContenido(event.target.innerWidth);
  }

  adaptarContenido(size: number): void{
    if (size >= 1366) {
      this.numColumnas = 4;
    }
    if (size < 1366 && size >= 1050) {
      this.numColumnas = 3;
    }
    if (size < 1050 && size >= 710) {
      this.numColumnas = 2;
    }
    if (size < 710) {
      this.numColumnas = 1;
    }
  }
}
