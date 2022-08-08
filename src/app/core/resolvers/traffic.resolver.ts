import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HomeService } from '../services/home.service';

@Injectable()
export class TrafficResolver implements Resolve<any> {
  constructor(private homeService: HomeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.homeService.getTraffic();
  }
}
