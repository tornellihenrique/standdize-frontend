import { TestBed } from '@angular/core/testing';

import { TrafficResolver } from './traffic.resolver';

describe('TrafficResolver', () => {
  let resolver: TrafficResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TrafficResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
