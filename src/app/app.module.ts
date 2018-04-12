import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// npm install ng-packagr --save-dev
// ng-package.json in the root folder
// index.ts in the root folder and content contains export * from './src/app/module_path/module_name'
// Add in file package.json, the script: "packagr": "ng-packagr -p ng-package.json"

// npm login
// npm run packagr
// npm pack
// npm publish dist
