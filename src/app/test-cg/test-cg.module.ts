import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestCGRoutingModule } from './test-cg-routing.module';
import { TestComponentComponent } from './test-component/test-component.component';


@NgModule({
  declarations: [
    TestComponentComponent
  ],
  imports: [
    CommonModule,
    TestCGRoutingModule
  ]
})
export class TestCGModule { }
