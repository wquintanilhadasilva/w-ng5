// tslint:disable-next-line:no-implicit-dependencies
import { Pipe, PipeTransform } from '@angular/core';

export interface FilterParam {
  field: string;
  value: string;
}

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(values: any[], filter: FilterParam[] | string | number): any {
    if (filter instanceof Array) {
      return this._checkComplexType(values, filter);
    } else {
      return this._checkSimpleType(values, filter);
    }
  }

  /**
   * Handle simple filters (not arrays)
   *
   * @private
   * @param {any[]} values
   * @param {*} filter
   * @returns {*}
   * @memberof FilterPipe
   */
  private _checkSimpleType(values: any[], filter: string | number): any {
    if (!values || !filter) {
      return values;
    }

    const normalizedValues: any[] = [...values];
    const normalizedSearch = this._replaceSpecialChars(
      filter.toString().toLowerCase(),
    );
    return normalizedValues.filter((item) =>
      this._replaceSpecialChars(item.toString())
        .toLowerCase()
        .includes(normalizedSearch),
    );
  }

  private _checkComplexType(values, filter: FilterParam[]): any {
    if (!values || !filter || !filter.length) {
      return values;
    }

    const result = [];

    // find in all records
    values.forEach((row) => {
      let match = false;
      // find in all filters in the array of filters
      filter.forEach((field) => {
        match = match || this._checkValue(row, field);
      });
      if (match) {
        result.push(row); // add row in return
      }
    });

    return result;
  }

  private _checkValue(item, filter): boolean {
    if (!filter || !filter.field || !filter.value) {
      return true;
    }
    if (this._existDot(filter.field)) {
      return this._parseValue(item, filter.value, filter.field);
      // return false;
    } else {
      let value = item[filter.field];
      if (value) {
        value = this._replaceSpecialChars(item[filter.field].toString());
        const normalizedSearch = this._replaceSpecialChars(
          filter.value.toString().toLowerCase(),
        );
        return value.toLowerCase().includes(normalizedSearch);
      } else {
        return false;
      }
    }
  }

  private _parseValue(reference, search, filter): boolean {
    const fields = filter.split('.');
    return this._existFieldValue(reference, search, fields, 0);
  }

  private _existDot(path: string): boolean {
    return path.indexOf('.') > -1;
  }

  private _existFieldValue(obj, search, fieldFind, indexFind: number): boolean {
    // Lê o valor da propriedade
    const ref = obj[fieldFind[indexFind]];
    // Se estiver no último nível...
    if (indexFind === fieldFind.length - 1) {
      // Se tiver valor, confere se contém o que está procurando...
      if (ref) {
        const value = this._replaceSpecialChars(ref.toString());
        const normalizedSearch = this._replaceSpecialChars(
          search.toString().toLowerCase(),
        );
        return value.toLowerCase().includes(normalizedSearch);
      } else {
        return false;
      }
      // Não está no último nível mas há valor na referência
    } else if (ref) {
      return this._existFieldValue(ref, search, fieldFind, ++indexFind);
      // Não está no último nível e não há valor na referência (null)
    } else {
      return false;
    }
  }

  /**
   * Replace special local characters for regular one
   *
   * @private
   * @param {string} str
   * @returns
   * @memberof FilterPipe
   */
  private _replaceSpecialChars(str: string) {
    str = str.replace(/[ÀÁÂÃÄÅ]/, 'A');
    str = str.replace(/[àáâãäå]/, 'a');
    str = str.replace(/[ÈÉÊË]/, 'E');
    str = str.replace(/[èéêë]/, 'e');
    str = str.replace(/[ÍÏ]/, 'I');
    str = str.replace(/[íï]/, 'i');
    str = str.replace(/[óõ]/, 'o');
    str = str.replace(/[ÓÕ]/, 'O');
    str = str.replace(/[úü]/, 'u');
    str = str.replace(/[ÚÜ]/, 'U');
    str = str.replace(/[Ç]/, 'C');
    str = str.replace(/[ç]/, 'c');

    return str.replace(/[^a-z0-9]/gi, '');
  }
}
