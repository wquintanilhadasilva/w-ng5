import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pipe, PipeTransform } from '@angular/core';

export interface FilterParam {
  field: string;
  value: string;
}

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], filter: any): any {

    if (filter instanceof Array) {
      return this.checkComplexType(values, filter);
    } else {
      return this.checkSimpleType(values, filter);
    }
  }

  private checkSimpleType(values, filter: any): any {
    if (!values || !filter) {
      return values;
    }
    return values.filter(item => item.toString().toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1);
  }

  private checkComplexType(values, filter: Array<FilterParam>): any {

    if (!values || !filter || filter.length === 0) {
      return values;
    }

    const result = [];

    // find in all records
    values.forEach(row => {
      let match = false;
      // find in all filters in the array of filters
      filter.forEach( field => {
        match = match || this.checkValue(row, field);
      });
      if (match) {
        result.push(row); // add row in return
      }
    });

    return result;

  }

  private checkValue(item, filter): boolean {
    if (!filter || !filter.field || !filter.value || filter.value === '') {
      return true;
    }
    if (this.existDot(filter.field)) {
      return this.parseValue(item, filter.value, filter.field);
      // return false;
    } else {
      if (item[filter.field]) {
          return item[filter.field].toString().toLowerCase().indexOf(filter.value.toString().toLowerCase()) !== -1;
      }else {
          return false;
      }
    }
  }

  private parseValue(reference, search, filter): boolean {
    const fields = filter.split('.');
    return this.existFieldValue(reference, search, fields, 0);
  }

  private existDot(path: string): boolean {
    return path.indexOf('.') > -1;
  }

  private existFieldValue(obj, search, fieldFind, indexFind: number): boolean {
    // Lê o valor da propriedade
    const ref = obj[fieldFind[indexFind]];
    // Se estiver no último nível...
    if (indexFind === fieldFind.length - 1) {
      // Se tiver valor, confere se contém o que está procurando...
      if (ref) {
        return ref.toString().toLowerCase().indexOf(search.toString().toLowerCase()) !== -1;
      } else {
        return false;
      }
    // Não está no último nível mas há valor na referência
    } else if (ref) {
      return this.existFieldValue(ref, search, fieldFind, ++indexFind);
    // Não está no último nível e não há valor na referência (null)
    } else {
      return false;
    }
  }

}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterPipe],
  exports: [FilterPipe]
})
export class PipesModule { }
