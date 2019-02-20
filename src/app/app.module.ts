import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { CircleComponent } from './circle/circle.component';
import { FormsModule } from '@angular/forms';
import { TriangleComponent } from './triangle/triangle.component';


    

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    CircleComponent,
    TriangleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
