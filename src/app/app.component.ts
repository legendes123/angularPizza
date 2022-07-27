import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  @ViewChild("someDiv", {static: false})
  nameDiv: ElementRef|undefined;



  val = true;
  count:number = 0;
  public doSomething(date: any):void {
    this.count = date

  }



  anValue(){
    this.val = false

  }
  anValueTrue() {
  this.val = true;





  }
  condition:boolean = false

  appClick(event:any){
    console.log(event)
    let el = event.target
    el.classList.add('active');
    console.log(this.nameDiv)
  }



}
