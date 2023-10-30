import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show:boolean = true;
  clicks:number = 0;

  showMessage(): void {
    this.show = !this.show; // toggle
  }

  AddClick(): void {
    this.clicks += 1;
  }
}