import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfRenderComponent } from './component/if-render/if-render.component';
import { EventosComponent } from './component/eventos/eventos.component';
import { EmitterComponent } from './component/emitter/emitter.component';
import { ChangeNumberComponent } from './component/change-number/change-number.component';
import { ListRenderComponent } from './component/list-render/list-render.component';

@NgModule({
  declarations: [
    AppComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }