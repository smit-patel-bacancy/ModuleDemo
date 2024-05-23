import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent1Component } from './shared-component1/shared-component1.component';
import { SharedComponent2Component } from './shared-component2/shared-component2.component';
import { LoaderComponent } from './loader/loader.component';
import { AlertWindowComponent } from './alert-window/alert-window.component';



@NgModule({
  declarations: [
    SharedComponent1Component,
    SharedComponent2Component,
    LoaderComponent,
    AlertWindowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedComponent1Component,
    SharedComponent2Component,
    LoaderComponent,
    AlertWindowComponent
  ]
})
export class SharedModule { }
