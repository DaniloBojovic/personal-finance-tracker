import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../../state/app.state';
import { Store } from '@ngrx/store';
import { Transaction } from '../../../state/transactions/transaction.model';
import * as TransactionActions from '../../../state/transactions/transaction.actions';
import { TransactionEditServiceService } from './../../../services/transaction-edit-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss',
})
export class TransactionFormComponent implements OnInit {
  //@Input() transaction: Transaction | null = null;
  transactionForm!: FormGroup;
  transaction: Transaction | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private transactionEditService: TransactionEditServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      date: [this.transaction ? this.transaction.date : '', Validators.required],
      amount: [this.transaction ? this.transaction.amount : '', [Validators.required, Validators.min(0.01)]],
      description: [this.transaction ? this.transaction.description : '', Validators.required],
      category: [this.transaction ? this.transaction.category : '', Validators.required],
      type: [this.transaction ? this.transaction.type : 'expense', Validators.required],
    });

    // Check if the route is for adding a new transaction
    if (this.route.snapshot.url.some(segment => segment.path === 'add-transaction')) {
      this.transactionEditService.setTransaction(null); // Clear the transaction in the service
    }

    this.transactionEditService.selectedTransaction$.subscribe(transaction => {
      if (transaction) {
        this.transaction = transaction; // Store the transaction locally
        this.transactionForm.patchValue(transaction);
      }
    });
  }

  // ngOnChanges(): void {
  //   debugger;
  //   if (this.transaction) {
  //     this.transactionForm.patchValue(this.transaction); // Pre-fill the form with the transaction details
  //   }
  // }

  onSubmit(): void {
    debugger;
    if (this.transactionForm.valid) {
      //const transaction: Transaction = this.transactionForm.value;
      const updatedTransaction: Transaction = { ...this.transaction, ...this.transactionForm.value };
      if (this.transaction) {
        this.store.dispatch(TransactionActions.updateTransaction({ transaction: updatedTransaction }));
        this.router.navigate(['transactions']);
      } else {
        this.store.dispatch(TransactionActions.addTransaction({ transaction: updatedTransaction }));
        this.router.navigate(['transactions']);
      }
      //this.store.dispatch(TransactionActions.addTransaction({ transaction }));
      this.transactionForm.reset();
      this.transaction = null; // Reset the form
    }
  }
}
