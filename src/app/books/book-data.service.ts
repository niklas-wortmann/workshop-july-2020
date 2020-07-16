import { Injectable } from '@angular/core';
import { Book } from './book-list/book.type';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private httpClient: HttpClient){}

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:4730/books');
  }
}
