import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 name:string = '';
 date:string = '';
 amount?:number ;
 height?:number ;
 miles?:number;

  cars:Object = {
      "brand": "Mercedes-Benz",
      "model": "Citan",
      "car body": "van",
      "color": "red",
      "price": "10000$",
      "year": 2010
    }


 onNameChange(event:Event) {
  this.name = (event.target as HTMLInputElement).value;
 }

 onDateChange(event:Event) {
  this.date = (event.target as HTMLInputElement).value;
 }

 onAmountchange(event:Event) {
  this.amount = Number((event.target as HTMLInputElement).value);
 }

 onHeightChange(event:Event) {
  this.height = parseFloat((event.target as HTMLInputElement).value);
 }

 onMilesChange(event:Event) {
  this.miles = parseFloat((event.target as HTMLInputElement).value);
 }
}
