import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss", "./product-card-2.css"]
})
export class ProductCardComponent implements OnInit {

  @Input()
  idProducto: string;

  indiceFoto: number = 0;

  mySlideImages = ["assets/img/img_1.jpg", "assets/img/img_2.jpg", "assets/img/img_3.jpg", "assets/img/img.jpg", "assets/img/img2.jpg"];

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
  }

  currentDiv(n: number) {
    this.indiceFoto = n-1;
  }

  pasarFoto(n: number): void{
    n += this.indiceFoto;
    if (n >= this.mySlideImages.length){
      n = 0;
    }
    if (n < 0){
      n = this.mySlideImages.length - 1;
    }
    this.indiceFoto = n;
  }
}
