import { IonicPageModule } from 'ionic-angular';

import { NgModule } from '@angular/core';

import { DataComponent } from './data';

@NgModule({
    declarations: [
        DataComponent,
    ],
    imports: [
        IonicPageModule.forChild(DataComponent),
    ],
})
export class DataModule { }
