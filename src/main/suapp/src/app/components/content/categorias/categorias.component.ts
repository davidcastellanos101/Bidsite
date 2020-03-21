import { Component, OnInit, HostListener } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
  	//this.adaptarContenido(window.innerWidth);
  }

  ngAfterViewInit(): void{
   // this.adaptarContenido(window.innerWidth);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //this.adaptarContenido(event.target.innerWidth);
  }

  pantallaPeque(): boolean{
    if (window.innerWidth < 1366) {
      return true;
    }
    return false;
  }

}