import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Sync } from '../models/home.model';
import { HomeService } from '../services/home.service';

@Injectable()
export class SyncResolver implements Resolve<Sync[]> {
  constructor(private homeService: HomeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sync[]> {
    return this.homeService.getSync();
  }
}
