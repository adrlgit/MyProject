import { Component } from '@angular/core';

/**
 * Generated class for the PopoverPadraoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover-padrao',
  template: `
    <button ion-item (click)="onSubmit('SALVAR')">
      Salvar
    </button>
    <button ion-item (click)="onSubmit('RETORNO')">
      Excluir
    </button>
  `,
})
export class PopoverPadraoComponent {
  text: string;
  public teste: any;

  constructor() {
    console.log('Hello PopoverPadraoComponent Component');
    this.text = 'Hello World';
  }
}
