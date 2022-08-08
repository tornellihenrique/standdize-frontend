import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TrafficRoutingModule } from './traffic-routing.module';
import { TrafficComponent } from './traffic.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TrafficComponent],
  imports: [CommonModule, TrafficRoutingModule, SharedModule],
  providers: [DatePipe],
})
export class TrafficModule {}
