import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Traffic, TrafficFlow, TrafficFlowSegment } from 'src/app/core/models/traffic.model';
import { HomeService } from 'src/app/core/services/home.service';
import { groupBy } from 'src/app/core/utils';

@Component({
  selector: 'std-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss'],
})
export class TrafficComponent implements OnInit, OnDestroy {
  currentTrafficFlow!: TrafficFlow;
  trafficFlowSegmentData: any[] = [];

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private homeService: HomeService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.homeService.traffic.pipe(takeUntil(this._unsubscribeAll)).subscribe(val => {
      if (val.trafficFlows?.length) {
        this.currentTrafficFlow = val.trafficFlows[0];
      }

      if (val.trafficFlowSegments?.length) {
        const data = groupBy(val.trafficFlowSegments, 'address');

        this.trafficFlowSegmentData = Object.keys(data).map(d => ({
          address: d,
          chart: [
            {
              name: d,
              series: data[d].map((s: any) => ({
                name: this.datePipe.transform(s.date, 'HH:mm'),
                value: s.currentSpeed,
              })),
            },
          ],
        }));
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
