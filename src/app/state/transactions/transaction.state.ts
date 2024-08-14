import { Transaction } from './transaction.model';

export interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

export const initialTransactionState: TransactionState = {
  transactions: [],
  loading: false,
  error: null,
};
