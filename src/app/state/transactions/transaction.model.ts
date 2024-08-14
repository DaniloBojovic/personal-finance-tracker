export interface Transaction {
  id: string;
  date: string; // ISO date string
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense'; // Specify if the transaction is income or expense
}
