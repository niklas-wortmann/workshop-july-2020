import { Injectable } from '@angular/core';
import { Book } from './book-list/book.type';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  private state = new BehaviorSubject<Book[] | undefined>(undefined);

  constructor(private httpClient: HttpClient){
    this.httpClient.get<Book[]>('http://localhost:4730/books').subscribe(books => {
      this.state.next(books);
    })
  }

  public getBooks(): Observable<Book[]> {
    return this.state.asObservable().pipe(
      filter(x => !!x)
    );
  }

  public addBook(book: Book): void {
    const newBookList = [...this.state.value, book];
    this.state.next(newBookList)
    
  }
}
