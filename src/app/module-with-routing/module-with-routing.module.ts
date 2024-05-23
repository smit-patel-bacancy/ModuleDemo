import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithRoutingRoutingModule } from './module-with-routing-routing.module';
import { TestComponent } from './test/test.component';
import { SharedModule } from '../shared/shared.module';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';


@NgModule({
  declarations: [
    TestComponent,
    Test2Component,
    Test3Component
  ],
  imports: [
    CommonModule,
    ModuleWithRoutingRoutingModule,
    SharedModule
  ]
})
export class ModuleWithRoutingModule { }
