import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { CircleComponent } from './circle/circle.component';
import { TriangleComponent } from './triangle/triangle.component';

const routes: Routes = [
  { path: 'square', component: SquareComponent },
  { path: 'circle', component: CircleComponent },
  { path: 'triangle', component: TriangleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
