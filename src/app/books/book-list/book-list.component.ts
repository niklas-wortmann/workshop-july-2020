import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from './book.type'
import { BookDataService } from '../book-data.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'jan-is-awesome-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(public bookService: BookDataService) { }

  ngOnInit(): void {
    debugger;
    this.books$ = this.bookService.getBooks();
  }

}
