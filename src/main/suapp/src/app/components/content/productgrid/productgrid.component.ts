import { Component, OnInit } from "@angular/core";
import { ProductCardComponent } from '../product-card/product-card.component';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: "app-productgrid",
  templateUrl: "./productgrid.component.html",
  styleUrls: ["./productgrid.component.scss"]
})
export class ProductgridComponent implements OnInit {
  tiles: Tile[] = [
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
