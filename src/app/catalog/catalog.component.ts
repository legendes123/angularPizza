import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',

  styleUrls: ['./catalog.component.css']

})
export class CatalogComponent implements OnInit {
  @Output() onDatePicked = new EventEmitter<any>();



  count:number = 0;

  public Caountplus(): void{
    this.count++
    this.onDatePicked.emit(this.count);

  }



  constructor() { }

  ngOnInit(): void {
  }

}
