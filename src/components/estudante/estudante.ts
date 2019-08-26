import { Component, Input } from '@angular/core';

import { Estudante } from './estudante.model';

/**
 * Generated class for the EstudanteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'estudante',
  templateUrl: 'estudante.html',
})
export class EstudanteComponent {

  @Input() estudante: Estudante;

  constructor() {

  }

}
