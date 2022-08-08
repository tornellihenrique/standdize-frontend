import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Sync } from '../core/models/home.model';
import { HomeService } from '../core/services/home.service';

@Component({
  selector: 'std-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss'],
})
export class SyncComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: MatTableDataSource<Sync> = new MatTableDataSource();

  columns = ['id', 'date', 'type', 'hasError', 'errorMessage'];

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.sync.pipe(takeUntil(this._unsubscribeAll)).subscribe(val => {
      this.dataSource.data = val;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
