import { Component } from '@angular/core';

interface MenuItem {
  name:string;
  route:string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
public menuItem:MenuItem[] =[
  {route:'/maps/fullscreen', name:'Full-Screen'},
  {route:'/maps/markers',    name:'Markers'},
  {route:'/maps/propeties',  name:'Propeties'},
  {route:'/maps/zoom-range', name:'Zoom-Range'}

]
}
