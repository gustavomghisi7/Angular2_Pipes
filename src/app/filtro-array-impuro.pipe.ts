import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array-puro.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {
  
}
