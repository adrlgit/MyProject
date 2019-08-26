import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginapopoverPage } from './paginapopover';
import { PopoverPadraoComponent } from '../../components/popover-padrao/popover-padrao';

@NgModule({
  declarations: [PaginapopoverPage, PopoverPadraoComponent],
  imports: [IonicPageModule.forChild(PaginapopoverPage)],
  entryComponents: [PaginapopoverPage, PopoverPadraoComponent],
})
export class PaginapopoverPageModule {}
