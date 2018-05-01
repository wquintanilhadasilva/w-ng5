# w-ng5 accelerator web components

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

### Filtering complex string - field 'Value' in level 2
    <input type="text"  [(ngModel)]="search">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.valor2', value: search}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtering complex string - middle field - 'Value' in level 1
    <input type="text"  [(ngModel)]="search3">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.valor1', value: search3}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtering complex array simple - field 'Nome' level 0
    <input type="text"  [(ngModel)]="search2">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'nome', value: search2}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtering in tree fields - field 'Valor' in level 2 or 'Valor' in level 1 or 'Nome' in level 0
    <input type="text"  [(ngModel)]="search5">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.valor2', value: search5}, {field:'n1.valor1', value: search5}, {field:'nome', value: search5}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>

### Filtering nonexistent field - 'Valor' in nonexistent level 3
    <input type="text"  [(ngModel)]="search4">
    <ul>
      <li *ngFor="let s of getComplexTypesExtends() | filter:[{field:'n1.n2.n3.valor3', value: search4}]">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>


### Filtering using inject FilterPipe in constructor of component

#### TypeScript method: 

Define a provider:
    
    // Import component to use in this code
    import { FilterPipe } from 'w-ng5';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      providers: [FilterPipe]
    })

If your prefer, import component in the provider section of app.module

Then import the pipe into the component constructor ...
    
    constructor(private pipe: FilterPipe) {}

And, create a method 'dataSource(param)' that will return a array of data to view

    public dataSource(textFilter) {
      const r = this.pipe.transform(this.getComplexTypesExtends(),
                                   [{field: 'n1.n2.valor2', value: textFilter}]);
      return r;
    }

... after, using this method 'dataSource(param)' on ngFor directive in the template html:

    <input type="text"  [(ngModel)]="search5">
    <ul>
      <li *ngFor="let s of dataSource(search5)">
        {{s.nome}} - {{s.idade}} - {{s.n1.valor1}} - {{s.n1.n2.valor2}}
      </li>
    </ul>


This component work with infinite attribute level...

# Project info - source code

This project is stored in [WNg5](https://github.com/wquintanilhadasilva/w-ng5) and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.
