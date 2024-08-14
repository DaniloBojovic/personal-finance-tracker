import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './features/transactions/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './features/transactions/transaction-form/transaction-form.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionListComponent },
  { path: 'add-transaction', component: TransactionFormComponent },
  { path: 'edit-transaction/:id', component: TransactionFormComponent },
  { path: '', redirectTo: '/transactions', pathMatch: 'full' }, // Redirect to transaction list by default
  { path: '**', redirectTo: '/transactions' }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
