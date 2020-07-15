import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRowComponent } from './book-list/book-row/book-row.component';


@NgModule({
  declarations: [BooksComponent, BookListComponent, BookRowComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule { }
