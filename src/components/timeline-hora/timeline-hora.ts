import { Component } from '@angular/core';

/**
 * Generated class for the TimelineHoraComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timeline-hora',
  templateUrl: 'timeline-hora.html',
})
export class TimelineHoraComponent {
  text: string;
  hora: number;

  constructor() {
    console.log('Hello TimelineHoraComponent Component');
    this.text = '13:00';
    this.hora = 1200;
  }
}
