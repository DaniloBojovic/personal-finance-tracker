import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from '../state/transactions/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionEditServiceService {
  private transactionSource = new BehaviorSubject<Transaction | null>(null);
  selectedTransaction$ = this.transactionSource.asObservable();

  constructor() {}

  setTransaction(transaction: Transaction | null): void {
    this.transactionSource.next(transaction);
  }
}
