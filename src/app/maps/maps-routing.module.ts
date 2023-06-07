import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapLayoutComponent } from './layout/map-layout/map-layout.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropetiesPageComponent } from './pages/propeties-page/propeties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path:'',
    component:MapLayoutComponent,
    children:[
      {path:'fullscreen', component:FullScreenPageComponent},
      {path:'markers',    component:MarkersPageComponent},
      {path:'propeties',  component:PropetiesPageComponent},
      {path:'zoom-range', component:ZoomRangePageComponent},
      {path:'**',         redirectTo:'fullscreen'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
