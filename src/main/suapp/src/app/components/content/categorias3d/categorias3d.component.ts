import { Component, OnInit, HostListener } from '@angular/core';

declare function inicializarCarousel(): any;

export interface Categoria {
  nombre: String;
  imgSrc: String;
}

@Component({
  selector: 'app-categorias3d',
  templateUrl: './categorias3d.component.html',
  styleUrls: ['./categorias3d.component.scss']
})
export class Categorias3dComponent implements OnInit {

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
  	//this.adaptarContenido(window.innerWidth);
  }

  ngAfterViewInit(): void{
    inicializarCarousel();
   // this.adaptarContenido(window.innerWidth);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //this.adaptarContenido(event.target.innerWidth);
  }

  adaptarContenido(size: number): void{
    if (size >= 1366) {
      //this.numColumnas = 4;
    }
    else{
      
    }
  }

  getEstiloCategoria(indice: number): Object {
    let gradosPorcategoria: number = indice*(360/this.categorias.length);
    return {'transform': 'rotateY(' + gradosPorcategoria + 'deg) '+
    'translateZ(' +this.anchuraCategoria+ 'px)'};
  }
}