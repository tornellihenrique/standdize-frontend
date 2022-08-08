import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyncRoutingModule } from './sync-routing.module';
import { SyncComponent } from './sync.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SyncComponent],
  imports: [CommonModule, SyncRoutingModule, SharedModule],
})
export class SyncModule {}
