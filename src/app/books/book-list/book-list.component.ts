import { Component, OnInit } from '@angular/core';
import { Book } from './book.type'
import { BookDataService } from '../book-data.service'

@Component({
  selector: 'jan-is-awesome-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookDataService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}
