import { Component, OnInit } from '@angular/core';

declare function inicializarCarousel(): any;

export interface Categoria {
  nombre: String;
  imgSrc: String;
}

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[] = [
    { nombre: "Autos deportivos", imgSrc: "assets/img/categorias/img3.jpg" },
    { nombre: "Autos", imgSrc: "assets/img/categorias/img2.jpg" },
    { nombre: "Motos", imgSrc: "assets/img/categorias/img1.jpg" },
    { nombre: "Mulas", imgSrc: "assets/img/categorias/img4.jpg" },
    { nombre: "Mulas", imgSrc: "assets/img/categorias/img4.jpg" },
    { nombre: "Mulas", imgSrc: "assets/img/categorias/img4.jpg" },
    { nombre: "Mulas", imgSrc: "assets/img/categorias/img4.jpg" },


  ];

  anchuraCategoria: number = 400;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    //inicializarCarousel();
  }

  acomodarCategorias(): void{
  }

  getEstiloCategoria(indice: number): Object {
    let gradosPorcategoria: number = indice*(360/this.categorias.length);
    return {'transform': 'rotateY(' + gradosPorcategoria + 'deg) '+
    'translateZ(' +this.anchuraCategoria+ 'px)'};
  }
}