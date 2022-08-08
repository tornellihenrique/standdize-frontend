import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Traffic } from 'src/app/core/models/traffic.model';
import { Weather } from 'src/app/core/models/weather.model';
import { HomeService } from 'src/app/core/services/home.service';
import { groupBy } from 'src/app/core/utils';

@Component({
  selector: 'std-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  weather$!: Observable<Weather[]>;

  currentWeather!: Weather;

  windData: any;
  humidityData: any;
  cloudData: any;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private homeService: HomeService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.homeService.weather.pipe(takeUntil(this._unsubscribeAll)).subscribe(val => {
      if (val?.length) {
        this.currentWeather = val[0];

        this.windData = [
          {
            name: 'Vento',
            series: val.map(w => ({
              name: this.datePipe.transform(w.date, 'HH:mm'),
              value: w.windKph + '',
            })),
          },
        ];

        this.humidityData = [
          {
            name: 'Humidade',
            series: val.map(w => ({
              name: this.datePipe.transform(w.date, 'HH:mm'),
              value: w.humidity + '',
            })),
          },
        ];

        this.cloudData = [
          {
            name: 'Nuvens',
            series: val.map(w => ({
              name: this.datePipe.transform(w.date, 'HH:mm'),
              value: w.cloud + '',
            })),
          },
        ];
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
