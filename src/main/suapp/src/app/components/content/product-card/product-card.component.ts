import { Component, OnInit, Input } from "@angular/core";
import * as jQuery from "jquery";
declare const plusDivs: any;
declare const currentDiv: any;
declare const showDivs: any;
declare const setProductId: any;

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss", "./aux.css"]
})
export class ProductCardComponent implements OnInit {

  @Input()
  idProducto: string;

  mySlideImages = ["assets/img/img_1.jpg", "assets/img/img_2.jpg", "assets/img/img_3.jpg"];

  constructor() {}

  ngOnInit(): void {
    setProductId(this.idProducto);
    jQuery(document).ready(function() {
      showDivs(1);
    });
  }
}
