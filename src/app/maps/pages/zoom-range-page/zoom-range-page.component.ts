import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl'; 
@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{
  public map?:Map;
  @ViewChild('map') divMap?: ElementRef;
  public zoom: number = 10;
  public currentlngLat:LngLat = new LngLat(-70.17837226015763, 18.68042211857592)

  ngAfterViewInit(): void {
    if(!this.divMap) throw 'No se pudo encotrar la referencia';
    this.map = new Map({
    container: this.divMap.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.currentlngLat, // starting position [lng, lat]
    zoom: this.zoom, // starting zoom
    });
    this.mapListeners();
}

ngOnDestroy():void{
  this.map?.remove();
}

mapListeners(){

  if(!this.map) throw 'Mapa no inicializado';
  this.map.on('zoom', (evet)=>{
    this.zoom = this.map!.getZoom();
  });

  this.map.on('zoomend', (evet)=>{
    if (this.map!.getZoom() < 18) return;
    this.map!.zoomTo(18);
  });

  this.map.on('move',()=>{
    this.currentlngLat = this.map!.getCenter();
  });
}

zoomIn(){
this.map?.zoomIn();
}
zoomOut(){
  this.map?.zoomOut();
}
zoomChanged(value:string){
this.zoom = Number(value);
this.map?.zoomTo(this.zoom);
}
}
