import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HomeService } from '../services/home.service';

@Injectable()
export class WeatherResolver implements Resolve<boolean> {
  constructor(private homeService: HomeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.homeService.getWeather();
  }
}
