import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ITransaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  imports: [CommonModule, MatListModule, MatDialogModule, MatButtonModule, FormsModule],
  standalone: true,
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailComponent implements OnInit, OnDestroy {
  readonly dialog = inject(MatDialog);
  transactionId = '';
  transaction: ITransaction = {
    id: '',
    date: '',
    Comments: ''
  };
  displayedColumns: string[] = ['fieldName', 'requirements'];
  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.transactionId = params['id'];
      this.transactionService.getTransactionById(this.transactionId).subscribe((res: any) => {
        this.transaction = res;
        console.log(this.transaction.id, 'transaction detail >>>', this.transaction)
      })
    });
  }

  navBack() {
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
  }
}
