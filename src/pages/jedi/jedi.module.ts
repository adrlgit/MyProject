import { IonicPageModule } from 'ionic-angular';

import { NgModule } from '@angular/core';

import { ComponentsModule } from '../../components/components.module';
import { JediPage } from './jedi';

@NgModule({
  declarations: [
    JediPage,
  ],
  imports: [
    IonicPageModule.forChild(JediPage),
    ComponentsModule,
  ],
})
export class JediPageModule { }
