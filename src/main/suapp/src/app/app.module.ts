import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductCardComponent } from "./components/content/product-card/product-card.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContentComponent } from "./components/content/content.component";
import { TestComponent } from "./components/content/test/test.component";
import { ProductgridComponent } from './components/content/productgrid/productgrid.component';
import { CategoriasComponent } from './components/content/categorias/categorias.component';
import { Categorias2dComponent } from './components/content/categorias2d/categorias2d.component';
import { Categorias3dComponent } from './components/content/categorias3d/categorias3d.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TestComponent,
    ProductgridComponent,
    CategoriasComponent,
    Categorias2dComponent,
    Categorias3dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
