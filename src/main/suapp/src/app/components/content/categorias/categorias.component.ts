import { Component, OnInit } from '@angular/core';

declare function inicializarCarousel(): any;

export interface Producto {
  nombre: String;
  precio: String;
  imgSrc: String;
}

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  productos: Producto[] = [
    { nombre: "Ferrari Modena", precio: "$250.000.000", imgSrc: "assets/img/img.jpg" },
    { nombre: "Ferrari Enzo", precio: "$350.000.000", imgSrc: "assets/img/img2.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_1.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_2.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_3.jpg" },
    { nombre: "Ferrari Modena", precio: "$250.000.000", imgSrc: "assets/img/img.jpg" },
    { nombre: "Ferrari Enzo", precio: "$350.000.000", imgSrc: "assets/img/img2.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_1.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_2.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_3.jpg" },
    { nombre: "Ferrari Modena", precio: "$250.000.000", imgSrc: "assets/img/img.jpg" },
    { nombre: "Ferrari Enzo", precio: "$350.000.000", imgSrc: "assets/img/img2.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_1.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_2.jpg" },
    { nombre: "BMW 320i", precio: "$35.000.000", imgSrc: "assets/img/img_3.jpg" }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    inicializarCarousel();
  }
}
/** 
(function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // https://getbootstrap.com/javascript/#carousel
  $('#carousel123').carousel({ interval: 2000 });
  $('#carouselABC').carousel({ interval: 3600 });
}());

(function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());
*/