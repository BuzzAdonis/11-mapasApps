import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; 
@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{
  @ViewChild('map') divMap?: ElementRef;
  @Input() lngLat?:[number,number];
  public map?:Map;
  
  ngAfterViewInit() {
    if(!this.divMap) throw 'Map Div not found';
    if(!this.lngLat) throw 'Lng can`t be null';
    const [lnt, lat] = this.lngLat;
    const currentlngLat:LngLat = new LngLat(lnt, lat)
    this.map = new Map({
    container: this.divMap.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: currentlngLat,
    zoom: 13, // starting zoom
    interactive:false
    });
    new Marker()
    .setLngLat(currentlngLat)
    .addTo(this.map);
}
}
