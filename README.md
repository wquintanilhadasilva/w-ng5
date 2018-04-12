# [WNg5](https://github.com/wquintanilhadasilva/w-ng5)

This project [WNg5](https://github.com/wquintanilhadasilva/w-ng5) was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

He contains web components witch goals acelerate web devolper using Angular 5x

## Composition package

* Generic Filter for using in directives ngFor

## Sample use

For use this components, before, install this package with npm:

    npm install w-ng5 --save

After, import module in app.module
    
    ...
    import { PipesModule } from 'w-ng5';

In the next step, add in declare section of app.module:

    imports: [
      PipesModule,
      ...
    ]

And, enjoy....

### Filtro de String Simples

    <input type="text"  [(ngModel)]="filtroString">
    <ul>
      <li *ngFor="let s of getStrings() | filter:filtroString">
        {{s}}
      </li>
    </ul>

### Filtro de String Complexa - Valor Nível 2

    <input type="text"  [(ngModel)]="search">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.valor2', value: search}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtro de String Complexa - Campo no meio - Valor Nível 1

      <input type="text"  [(ngModel)]="search3">
      <ul>
        <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.valor1', value: search3}]">
          {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
        </li>
      </ul>

### Filtro de Array complexo simples - Nome Nível 0

      <input type="text"  [(ngModel)]="search2">
      <ul>
        <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'nome', value: search2}]">
          {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
        </li>
      </ul>

### Filtro em três campos - Valor Nível 2 ou Valor Nível 1 ou Nome Nível 0
      <input type="text"  [(ngModel)]="search5">
      <ul>
        <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.valor2', value: search5}, {field:'n1.valor1', value: search5}, {field:'nome', value: search5}]">
          {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
        </li>
      </ul>

### Filtro campo que não existe - Valor Nível 3

      <input type="text"  [(ngModel)]="search4">
      <ul>
        <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.n3.valor3', value: search4}]">
          {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
        </li>
      </ul>
