import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'std-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
  showLoading$!: Observable<boolean>;

  constructor(private loading: LoadingService) {}

  ngOnInit(): void {
    this.showLoading$ = this.loading.show;
  }
}
