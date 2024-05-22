import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithRoutingRoutingModule } from './module-with-routing-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    ModuleWithRoutingRoutingModule
  ]
})
export class ModuleWithRoutingModule { }
