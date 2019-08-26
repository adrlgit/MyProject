import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestantePage } from './gestante';

@NgModule({
  declarations: [
    GestantePage,
  ],
  imports: [
    IonicPageModule.forChild(GestantePage),
  ],
})
export class GestantePageModule {}
