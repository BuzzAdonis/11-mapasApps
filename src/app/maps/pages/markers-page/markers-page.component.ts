import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; 

interface   MarkerAndColor{
  color: string;
  marker: Marker;
}

interface PlainMarker{
  color:string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;
  public markers: MarkerAndColor[] = [];
  public map?:Map;
  public currentlngLat:LngLat = new LngLat(-70.17837226015763, 18.68042211857592)

  ngAfterViewInit() {
    if(!this.divMap) throw 'No se pudo encotrar la referencia';
    this.map = new Map({
    container: this.divMap.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.currentlngLat, // starting position [lng, lat]
    zoom: 13 // starting zoom
    });
    this.readFromLocalStorage();
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Adonis Alexander Severino'
    // const marker = new Marker({
    //   //color:'red'
    //   element:markerHtml
    // })
    //   .setLngLat(this.currentlngLat)
    //   .addTo( this.map );
}

createMarker(){
  if(!this.map) return;
  //Color aleatirio
  const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  const lngLat = this.map.getCenter();
  this.addMarker(lngLat, color);
}

addMarker(lnglat:LngLat, color:string = 'red'){
  if(!this.map) return;
    const marker = new Marker({
      color,
      draggable:true
    })
    .setLngLat(lnglat)
    .addTo(this.map);
    marker.on('dragend', () =>  this.saveToLocalStorage());
    this.markers.push( {color, marker} );
    this.saveToLocalStorage();
}

deleteMarker(index: number){
this.markers[index].marker.remove();
this.markers.splice(index,1);
}

flyTo(marker:Marker){
  this.map?.flyTo({
    zoom:14,
    center:marker.getLngLat()

  })
}

saveToLocalStorage(){
  const plainMarkers: PlainMarker[] = this.markers.map(({color, marker})=>{
    return {color,lngLat:marker.getLngLat().toArray()};
  });

  localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
}

readFromLocalStorage(){

  const plainMarkersString: string = localStorage.getItem('plainMarkers') ?? '[]';
  const plainMarkers:PlainMarker[] = JSON.parse(plainMarkersString);
  plainMarkers.forEach(({color , lngLat}) => {
    const [lng, lat] = lngLat;
    const coords = new LngLat(lng, lat);
    this.addMarker(coords, color);
  });
}

}
