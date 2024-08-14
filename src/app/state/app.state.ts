import { ActionReducerMap } from '@ngrx/store';
import { TransactionState } from './transactions/transaction.state';
import { transactionReducer } from './transactions/transaction.reducer';

export interface AppState {
  transactions: TransactionState;
}

// Register the reducers
export const reducers: ActionReducerMap<AppState> = {
  transactions: transactionReducer,
};
