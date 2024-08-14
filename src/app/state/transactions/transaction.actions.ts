import { createAction, props } from '@ngrx/store';
import { Transaction } from './transaction.model';

export const loadTransactions = createAction('[Transaction] Load Transactions');
export const loadTransactionsSuccess = createAction('[Transaction] Load Transactions Success', props<{ transactions: Transaction[] }>());
export const loadTransactionsFailure = createAction('[Transaction] Load Transactions Failure', props<{ error: string }>());
export const addTransaction = createAction('[Transaction] Add Transaction', props<{ transaction: Transaction }>());
export const addTransactionSuccess = createAction('[Transaction] Add Transaction Success', props<{ transaction: Transaction }>());
export const addTransactionFailure = createAction('[Transaction] Add Transaction Failure', props<{ error: string }>());
export const updateTransaction = createAction('[Transaction] Update Transaction', props<{ transaction: Transaction }>());
export const updateTransactionSuccess = createAction('[Transaction] Update Transaction Success', props<{ transaction: Transaction }>());
export const updateTransactionFailure = createAction('[Transaction] Update Transaction Failure', props<{ error: string }>());
export const deleteTransaction = createAction('[Transaction] Delete Transaction', props<{ id: string }>());
export const deleteTransactionSuccess = createAction('[Transaction] Delete Transaction Success', props<{ id: string }>());
export const deleteTransactionFailure = createAction('[Transaction] Delete Transaction Failure', props<{ error: string }>());
