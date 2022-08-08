import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncResolver } from '../core/resolvers/sync.resolver';
import { SyncComponent } from './sync.component';

const routes: Routes = [
  {
    path: '',
    component: SyncComponent,
    resolve: {
      data: SyncResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SyncRoutingModule {}
