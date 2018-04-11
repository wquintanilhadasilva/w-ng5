import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FilterPipe],
  declarations: [FilterPipe]
})
export class PipesModule { }
