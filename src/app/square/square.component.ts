import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  public side:number;

  constructor() { }

  getArea() :number{
    if(!isNaN(Number(this.side)) ) {
      const area = (Number(this.side))*(Number(this.side));
      return area;
    }
    return 0;
  }

  getPerimeter():number {
    if(!isNaN(Number(this.side)) ) {
      const perimeter = (Number(this.side))*4;
      return perimeter;
    }
    return 0;
  }

  ngOnInit() {
  }

}
