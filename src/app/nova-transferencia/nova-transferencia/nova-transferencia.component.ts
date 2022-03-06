import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number;
  destino: number;
  // @Output() Permite exportar informação para fora do componente
  @Output() aoTransferir = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  transferir(){
    console.log('Solicitada nova transferência');
    this.aoTransferir.emit({valor: this.valor, destino: this.destino});

    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
