import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfRenderComponent } from './compenent/if-render/if-render.component';
import { EventosComponent } from './compenent/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    IfRenderComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }