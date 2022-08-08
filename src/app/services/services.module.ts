import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { ServicesListComponent } from './services-list/services-list.component';

@NgModule({
  declarations: [ServicesComponent, ServicesListComponent],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
})
export class ServicesModule {}
