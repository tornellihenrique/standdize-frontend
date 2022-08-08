import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, WeatherRoutingModule, SharedModule],
  providers: [DatePipe],
})
export class WeatherModule {}
