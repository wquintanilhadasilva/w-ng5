# w-ng5 accelerator WebComponents

Angular Generic Filters to *ngFor

# Objective

Filter records of your listings with simple strings using a single field or multiple fields on plan objects. Filter also by using fields in non-plan structured objects by observing one or more attributes or sub-attributes of these objects by browsing their OGNL properties.

# Details

Details about this project and user tutorial

## Composition package

* Generic Filter for using in directives ngFor

## How to install and configure

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

## Sample use

### Filtering simple string
    <input type="text"  [(ngModel)]="filtroString">
    <ul>
      <li *ngFor="let s of getStrings() | filter:filtroString">
        {{s}}
      </li>
    </ul>

### Filtering complex string - field 'Value' in nivel 2
    <input type="text"  [(ngModel)]="search">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.valor2', value: search}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtering complex string - middle field - 'Value' in nivel 1
    <input type="text"  [(ngModel)]="search3">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.valor1', value: search3}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtering complex array simple - field 'Nome' Nivel 0
    <input type="text"  [(ngModel)]="search2">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'nome', value: search2}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtering in tree fields - field 'Valor' in nivel 2 or 'Valor' in nivel 1 or 'Nome' in nivel 0
    <input type="text"  [(ngModel)]="search5">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.valor2', value: search5}, {field:'n1.valor1', value: search5}, {field:'nome', value: search5}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtering nonexistent field - 'Valor' in nonexistent nível 3
    <input type="text"  [(ngModel)]="search4">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.n3.valor3', value: search4}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>


# Project info - source code

This project is stored in [WNg5](https://github.com/wquintanilhadasilva/w-ng5) and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.
