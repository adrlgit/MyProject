import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VelhaPage } from './velha';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [VelhaPage],
  imports: [IonicPageModule.forChild(VelhaPage), ComponentsModule],
})
export class VelhaPageModule {}
