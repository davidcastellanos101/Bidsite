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

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TestComponent,
    ProductgridComponent
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
