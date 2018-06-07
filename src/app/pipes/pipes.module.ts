import { Pipe, PipeTransform, NgModule } from '@angular/core';

import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  exports: [FilterPipe],
  providers: [FilterPipe]
})
export class PipesModule { }
