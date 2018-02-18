import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
    // google maps zoom level
    zoom: number = 8;

    constructor()
    {
      
    }
    // initial center position for the map
    lat: number = 12.972442;
    lng: number = 77.580643;
  
    
    // mapClicked($event: MouseEvent) {
    //   this.markers.push({
    //     lat: $event.coords.lat,
    //     lng: $event.coords.lng,
    //     draggable: true
    //   });
    // }
    
    
    
    markers: marker[] = [
      {
        lat: 51.673858,
        lng: 7.815982,
        label: 'A',
        draggable: true
      },
      {
        lat: 51.373858,
        lng: 7.215982,
        label: 'B',
        draggable: false
      },
      {
        lat: 51.723858,
        lng: 7.895982,
        label: 'C',
        draggable: true
      }
    ]
  }
  
  // just an interface for type safety.
  interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
  }
  