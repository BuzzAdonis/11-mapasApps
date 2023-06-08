import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name:string;
  route:string;
}

@Component({
  selector: 'side-menu',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
public menuItem:MenuItem[] =[
  {route:'/maps/fullscreen', name:'Full-Screen'},
  {route:'/maps/markers',    name:'Markers'},
  {route:'/maps/propeties',  name:'Propeties'},
  {route:'/maps/zoom-range', name:'Zoom-Range'},
  {route:'/alone', name:'Alone Page'}

]
}
