import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from './expense';
import { Observable, of } from 'rxjs';

@Injectable()
export class ExpenseService {

  private expensesUrl: string;
  private headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:8080');

  constructor(private http: HttpClient) {
    this.expensesUrl = 'http://localhost:8080/expense';
  }

  public findAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl+'/fetch');
  }

  public save(expense: Expense) {
    return this.http.post<Expense>(this.expensesUrl+'/add', expense,  { 'headers': this.headers });
  }
}
