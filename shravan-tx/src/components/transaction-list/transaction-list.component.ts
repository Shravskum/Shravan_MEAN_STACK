import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { TransactionService } from '../transaction.service';
import { ITransaction } from '../transaction';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatTableModule],
  standalone: true,
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  txlist: ITransaction[] = [];
  displayedColumns: string[] = ['id', 'date', 'comments', 'action'];
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactions({
      sort: 'date',
      filter: 'COMPLETED,IN PROGRESS,REJECTED'
    }).subscribe((res: any) => {
      this.txlist = res;
    })
  }
}
