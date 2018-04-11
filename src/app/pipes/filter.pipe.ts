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
    return values.filter(item => item.indexOf(filter) !== -1);
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
    return item[filter.field].toString().toLowerCase().indexOf(filter.value.toString().toLowerCase()) !== -1;
  }


}
