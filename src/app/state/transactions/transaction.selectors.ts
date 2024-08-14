import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionState } from './transaction.state';

export const selectTransactionState = createFeatureSelector<TransactionState>('transactions');

export const selectAllTransactions = createSelector(selectTransactionState, (state: TransactionState) => state.transactions);

export const selectTransactionLoading = createSelector(selectTransactionState, (state: TransactionState) => state.loading);

export const selectTransactionError = createSelector(selectTransactionState, (state: TransactionState) => state.error);
