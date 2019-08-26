import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DataComponent } from './data/data';
import { EstudanteComponent } from './estudante/estudante';
import { PopoverPadraoComponent } from './popover-padrao/popover-padrao';
import { TimelineHoraComponent } from './timeline-hora/timeline-hora';

@NgModule({
  declarations: [DataComponent, TimelineHoraComponent,
    PopoverPadraoComponent,
    EstudanteComponent],
  imports: [],
  exports: [DataComponent, TimelineHoraComponent,
    PopoverPadraoComponent,
    EstudanteComponent],
  // SCHEMA PARA QUE EVITE A QUEBRA DE RENDERIZAÇÃO
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComponentsModule { }
