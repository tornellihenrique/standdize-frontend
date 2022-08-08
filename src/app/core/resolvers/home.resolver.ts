import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ServiceOverview } from '../models/home.model';
import { HomeService } from '../services/home.service';

@Injectable()
export class HomeResolver implements Resolve<ServiceOverview[]> {
  constructor(private homeService: HomeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceOverview[]> {
    return this.homeService.getOverview();
  }
}
