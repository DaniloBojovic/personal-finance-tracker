// src/app/state/transactions/transaction.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TransactionActions from './transaction.actions';
import { TransactionService } from '../../services/transaction.service';
import { addTransactionSuccess } from './transaction.actions';

@Injectable()
export class TransactionEffects {
  constructor(private actions$: Actions, private transactionService: TransactionService) {}

  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.loadTransactions),
      mergeMap(() =>
        this.transactionService.getAll().pipe(
          map(transactions => TransactionActions.loadTransactionsSuccess({ transactions })),
          catchError(error => of(TransactionActions.loadTransactionsFailure({ error })))
        )
      )
    )
  );

  addTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.addTransaction),
      mergeMap(action =>
        this.transactionService.add(action.transaction).pipe(
          map(transaction => TransactionActions.addTransactionSuccess({ transaction })),
          catchError(error => of(TransactionActions.addTransactionFailure({ error: error.message })))
        )
      )
    )
  );

  updateTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.updateTransaction),
      mergeMap(action =>
        this.transactionService.update(action.transaction).pipe(
          map(updatedTransaction => TransactionActions.updateTransactionSuccess({ transaction: updatedTransaction })),
          catchError(error => of(TransactionActions.updateTransactionFailure({ error: error.message })))
        )
      )
    )
  );

  deleteTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.deleteTransaction),
      mergeMap(action =>
        this.transactionService.delete(action.id).pipe(
          map(() => TransactionActions.deleteTransactionSuccess({ id: action.id })),
          catchError(error => of(TransactionActions.deleteTransactionFailure({ error: error.message })))
        )
      )
    )
  );
}
