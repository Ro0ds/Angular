import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfRenderComponent } from './compenent/if-render/if-render.component';
import { EventosComponent } from './compenent/eventos/eventos.component';
import { EmitterComponent } from './compenent/emitter/emitter.component';
import { ChangeNumberComponent } from './compenent/change-number/change-number.component';

@NgModule({
  declarations: [
    AppComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }