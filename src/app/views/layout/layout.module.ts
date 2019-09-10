import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { GridComponent } from './grid/grid.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [LayoutComponent, GridComponent, TableComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
