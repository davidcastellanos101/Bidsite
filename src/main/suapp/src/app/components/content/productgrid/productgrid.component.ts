import { Component, OnInit } from "@angular/core";
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
}
