import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeService } from './services/home.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeResolver } from './resolvers/home.resolver';
import { ErrorInterceptor } from './error.http-interceptor';
import { TrafficResolver } from './resolvers/traffic.resolver';
import { WeatherResolver } from './resolvers/weather.resolver';
import { LoadingService } from './services/loading.service';
import { LoadingInterceptor } from './loading.http-interceptor';
import { SyncResolver } from './resolvers/sync.resolver';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, SharedModule],
  providers: [
    HomeService,
    LoadingService,

    HomeResolver,
    TrafficResolver,
    WeatherResolver,
    SyncResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
