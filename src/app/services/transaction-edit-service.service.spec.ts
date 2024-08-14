import { TestBed } from '@angular/core/testing';

import { TransactionEditServiceService } from './transaction-edit-service.service';

describe('TransactionEditServiceService', () => {
  let service: TransactionEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
