import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadingService {
  private show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  get show(): Observable<boolean> {
    return this.show$.asObservable();
  }

  setLoading(value: boolean) {
    this.show$.next(value);
  }
}
