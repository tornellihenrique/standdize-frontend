import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { ServiceOverview, Sync } from '../models/home.model';
import { Traffic, TrafficFlow, TrafficFlowSegment, TrafficIncident } from '../models/traffic.model';
import { Weather } from '../models/weather.model';

@Injectable()
export class HomeService {
  private overview$ = new BehaviorSubject<ServiceOverview[]>([]);
  private isLoadingOverview$ = new BehaviorSubject<boolean>(false);

  private weather$ = new BehaviorSubject<Weather[]>([]);
  private isLoadingWeather$ = new BehaviorSubject<boolean>(false);

  private traffic$ = new BehaviorSubject<Traffic>({
    trafficFlows: [],
    trafficFlowSegments: [],
    trafficIncidents: [],
  });
  private isLoadingTraffic$ = new BehaviorSubject<boolean>(false);

  private sync$ = new BehaviorSubject<Sync[]>([]);
  private isLoadingSync$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  get overview() {
    return this.overview$.asObservable();
  }
  get isLoadingOverview() {
    return this.isLoadingOverview$.asObservable();
  }

  get weather() {
    return this.weather$.asObservable();
  }
  get isLoadingWeather() {
    return this.isLoadingWeather$.asObservable();
  }

  get traffic() {
    return this.traffic$.asObservable();
  }
  get isLoadingTraffic() {
    return this.isLoadingTraffic$.asObservable();
  }

  get sync() {
    return this.sync$.asObservable();
  }
  get isLoadingSync() {
    return this.isLoadingSync$.asObservable();
  }

  getOverview() {
    this.isLoadingOverview$.next(true);
    return this.http.get<ServiceOverview[]>('/api/service/overview').pipe(
      catchError(error => of([])),
      tap(res => {
        this.isLoadingOverview$.next(false);
        this.overview$.next(res);
      }),
    );
  }

  getWeather() {
    this.isLoadingWeather$.next(true);
    return this.http.get<any>('/api/service/weather').pipe(
      catchError(error => of([])),
      map(res => res.weather),
      tap(res => {
        this.isLoadingWeather$.next(false);
        this.weather$.next(res);
      }),
    );
  }

  getTraffic() {
    this.isLoadingTraffic$.next(true);
    return this.http.get<any>('/api/service/traffic').pipe(
      catchError(error => of([])),
      tap(res => {
        this.isLoadingTraffic$.next(false);
        this.traffic$.next(res);
      }),
    );
  }

  getSync() {
    this.isLoadingSync$.next(true);
    return this.http.get<any>('/api/sync').pipe(
      catchError(error => of([])),
      tap(res => {
        this.isLoadingSync$.next(false);
        this.sync$.next(res);
      }),
    );
  }
}
