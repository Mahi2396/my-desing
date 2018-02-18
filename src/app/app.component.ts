import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 12.972442;
  lng: number = 77.580643;

  cityNgModel: any;
  departmentNgModel: any;
  storeNgModel: any;
  sportNgModel: any;
  constructor() {
    this.cityNgModel = "City";
    this.departmentNgModel = "Department";
    this.storeNgModel = "Store";
    this.sportNgModel = "Sport";
  }

  cityObject: Array<Object> = [
    { num: 0, name: "Bangalore" },
    { num: 1, name: "Pune" },
    { num: 2, name: "Kolhapur" },
    { num: 3, name: "Mumbai" },
    { num: 4, name: "Kerla" },
  ];
  departmentObject: Array<Object> = [
    { num: 0, name: "IT" },
    { num: 1, name: "Mechanical" },
    { num: 2, name: "Art" },
    { num: 3, name: "English" },
    { num: 4, name: "Maths" },
  ];
  storeObject: Array<object> = [
    { num: 0, name: "Store 1" },
    { num: 1, name: "Store 2" },
    { num: 2, name: "Store 3" },
    { num: 3, name: "Store 4" },
    { num: 4, name: "Store 5" },
  ]
  sportObject: Array<object> = [
    { num: 0, name: "Cricket" },
    { num: 1, name: "Hockey" },
    { num: 2, name: "Swimming" },
    { num: 3, name: "Kabaddi" },
    { num: 4, name: "Badminton" },

  ]



}
