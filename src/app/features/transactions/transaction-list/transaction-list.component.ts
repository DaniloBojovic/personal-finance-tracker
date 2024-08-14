import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../../../state/transactions/transaction.model';
import { AppState } from '../../../state/app.state';
import { select, Store } from '@ngrx/store';
import * as TransactionActions from '../../../state/transactions/transaction.actions';
import { selectAllTransactions, selectTransactionError, selectTransactionLoading } from '../../../state/transactions/transaction.selectors';
import { Router } from '@angular/router';
import { TransactionEditServiceService } from './../../../services/transaction-edit-service.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss',
})
export class TransactionListComponent implements OnInit {
  transactions$!: Observable<Transaction[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  selectedTransaction: Transaction | null = null;

  constructor(private store: Store<AppState>, private router: Router, private transactionEditService: TransactionEditServiceService) {}

  ngOnInit(): void {
    debugger;
    this.store.dispatch(TransactionActions.loadTransactions());
    this.transactions$ = this.store.pipe(select(selectAllTransactions));
    this.loading$ = this.store.pipe(select(selectTransactionLoading));
    this.error$ = this.store.pipe(select(selectTransactionError));
  }

  onEdit(transaction: Transaction): void {
    // this.selectedTransaction = transaction; // Set the selected transaction
    debugger;
    this.transactionEditService.setTransaction(transaction);
    this.router.navigate(['/edit-transaction', transaction.id]);
  }

  onDelete(id: string): void {
    debugger;
    if (confirm('Are you sure you want to delete this transaction?')) {
      this.store.dispatch(TransactionActions.deleteTransaction({ id }));
    }
  }
}
