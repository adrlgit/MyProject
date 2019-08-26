import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaPage } from './nova';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [NovaPage],
  imports: [IonicPageModule.forChild(NovaPage), ComponentsModule],
})
export class NovaPageModule {}
