import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceOverview } from 'src/app/core/models/home.model';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'std-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent implements OnInit {
  overview$!: Observable<ServiceOverview[]>;

  columns = ['id', 'name', 'description', 'date'];

  constructor(private router: Router, private homeService: HomeService) {
    this.overview$ = this.homeService.overview;
  }

  ngOnInit(): void {
    
  }

  goToService(id: string) {
    this.router.navigate(['services', id]);
  }
}
