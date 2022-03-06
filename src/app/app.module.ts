import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia/nova-transferencia.component';

@NgModule({

  // Declara componentes
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],

  // Importa bibliotecas
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
