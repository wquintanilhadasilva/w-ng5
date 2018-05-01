import { Component } from '@angular/core';
import { FilterPipe } from '../..';

export interface IUser {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilterPipe]
})
export class AppComponent {
  title = 'app';

  constructor(private pipe: FilterPipe) {
  }

  getStrings() {
    const retorno = [];
    for (let i = 0; i < 10; i++) {
      retorno.push(`Item ${i}`);
    }
    return retorno;
  }

  getComplexType(): IUser[] {
    const retorno: IUser[] = [];
    for (let i = 0; i < 10; i++) {
      retorno.push({nome: `Nome ${i}`, idade: i});
    }
    return retorno;
  }

  getComplexTypesExtends() {
    const retorno = [];
    for (let i = 0; i < 10; i++) {
      const objeto = new Object();
      objeto['nome'] = `Nome ${i}`;
      objeto['idade'] = i;

      const N1 = new Object();
      N1['valor1'] = `Nível1 N1 ${i}`;

      const N2 = new Object();
      N2['valor2'] = `valor N2 ${i}`;
      N1['n2'] = N2;

      objeto['n1'] = N1;

      retorno.push(objeto);
    }
    return retorno;

  }

  public filtrar(search4) {
    const r = this.pipe.transform(this.getComplexTypesExtends(),
                                  [{field: 'n1.n2.valor2', value: search4}]);
    return r;
  }

}
