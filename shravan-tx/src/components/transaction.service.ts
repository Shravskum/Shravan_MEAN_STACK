import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITransaction, ITxParam } from './transaction';
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import Transactions from "../fixture/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  configUrl = 'assets/transaction.json';
  transactions: any = Transactions;

  constructor(
    private http: HttpClient
  ) {}

  getAllTransactions({ sort, filter }: ITxParam) {
    let params = new HttpParams();
    params = params.set('status', filter);

    return this.http.get(`http://localhost:3000/getTx`, { params })
  }

  getTransactionById(id: string) {
    let params = new HttpParams();
    params = params.set('id', id);

    return this.http.get(`http://localhost:3000/getTxById`, { params })
  }
}