import { createReducer, on } from '@ngrx/store';
import { initialTransactionState } from './transaction.state';
import * as TransactionActions from './transaction.actions';

export const transactionReducer = createReducer(
  initialTransactionState,
  on(TransactionActions.loadTransactions, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TransactionActions.loadTransactionsSuccess, (state, { transactions }) => ({
    ...state,
    loading: false,
    transactions,
  })),
  on(TransactionActions.loadTransactionsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TransactionActions.addTransaction, (state, { transaction }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TransactionActions.addTransactionSuccess, (state, { transaction }) => ({
    ...state,
    loading: false,
    transactions: [...state.transactions, transaction],
  })),
  on(TransactionActions.addTransactionFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TransactionActions.updateTransaction, (state, { transaction }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TransactionActions.updateTransactionSuccess, (state, { transaction }) => ({
    ...state,
    loading: false,
    transactions: state.transactions.map(t => (t.id === transaction.id ? transaction : t)),
  })),
  on(TransactionActions.updateTransactionFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TransactionActions.deleteTransaction, (state, { id }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TransactionActions.deleteTransactionSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    transactions: state.transactions.filter(t => t.id !== id),
  })),
  on(TransactionActions.deleteTransactionFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
