import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';

@NgModule({

  // Declara componentes
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],

  // Importa bibliotecas
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
