import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRowComponent } from './book-list/book-row/book-row.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookRowComponent, BookEditComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [BooksComponent, BookListComponent, BookEditComponent]
})
export class BooksModule { }
