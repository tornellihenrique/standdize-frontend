import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrafficComponent } from './traffic.component';

const routes: Routes = [
  {
    path: '',
    component: TrafficComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrafficRoutingModule {}
