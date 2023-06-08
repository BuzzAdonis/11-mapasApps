import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//MapBox carga general
import * as mapboxgl  from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from 'src/environments/environment';
(mapboxgl as any).accessToken =environment.mapbox_key;

import { MapsRoutingModule } from './maps-routing.module';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropetiesPageComponent } from './pages/propeties-page/propeties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
  
@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropetiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    CounterAloneComponent,
    MapsRoutingModule,
    SideMenuComponent
  ]
})
export class MapsModule { }
