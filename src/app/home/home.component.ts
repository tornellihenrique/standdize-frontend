import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceOverview } from '../core/models/home.model';
import { HomeService } from '../core/services/home.service';

@Component({
  selector: 'std-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  overview$!: Observable<ServiceOverview[]>;

  constructor(private route: ActivatedRoute, private homeService: HomeService) {}

  ngOnInit(): void {
    this.overview$ = this.homeService.overview;
  }
}
