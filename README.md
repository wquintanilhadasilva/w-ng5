# [WNg5](https://github.com/wquintanilhadasilva/w-ng5)

This project [WNg5](https://github.com/wquintanilhadasilva/w-ng5) was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

He contains web components witch goals acelerate web devolper using Angular 5x

## Composition package

* Generic Filter for using in directives ngFor

## Sample use

For use this components, before, install this package with npm:

  npm install w-ng5 --save

After, import module in app.module

  import { PipesModule } from './pipes/pipes.module';

In the next step, add in declare section of app.module:

  imports: [
    BrowserModule,
    PipesModule,
    ...
  ]

And, enjoy....

    <section>
      <label>Filtro de String</label>
      <input type="text"  [(ngModel)]="filtroString">
      <ul>
        <li *ngFor="let s of getStrings() | filter:filtroString">
          {{s}}
        </li>
      </ul>
    </section>

  <section>
    <label>Filtro de String Complexa</label>
    <input type="text"  [(ngModel)]="search">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.valor2', value: search}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>
  </section>

  <section>
    <label>Filtro de String Complexa - Campo no meio</label>
    <input type="text"  [(ngModel)]="search3">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.valor1', value: search3}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>
  </section>

  <section>
    <label>Filtro de Array complexo simples</label>
    <input type="text"  [(ngModel)]="search2">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'nome', value: search2}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>
  </section>

  <section>
    <label>Filtro campo que não existe</label>
    <input type="text"  [(ngModel)]="search2">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.n3.valor3', value: search2}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>
  </section>
