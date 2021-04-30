import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ]
})
export class BusinessModule { }
