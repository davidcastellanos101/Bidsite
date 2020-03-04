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

  ngOnInit(): void {}

  ngAfterViewInit(): void{
    this.adaptarContenido(window.innerWidth);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.adaptarContenido(event.target.innerWidth);
  }

  adaptarContenido(size: number): void{
    if (size >= 1100) {
      this.numColumnas = 4;
    }
    if (size < 1100 && size >= 800) {
      this.numColumnas = 3;
    }
    if (size < 800 && size >= 600) {
      this.numColumnas = 2;
    }
    if (size < 600) {
      this.numColumnas = 1;
    }
  }
}
