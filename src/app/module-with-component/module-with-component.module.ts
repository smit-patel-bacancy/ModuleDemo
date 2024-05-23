import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ComponentExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ModuleWithComponentModule { }
