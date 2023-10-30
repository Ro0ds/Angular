import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: 'Turca', type: 'Dog'},
    {name: 'Tom', type: 'Cat'},
    {name: 'Frida', type: 'Dog'},
    {name: 'Bob', type: 'Horse'},
  ];
}