import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.type';

@Component({
  selector: 'jan-is-awesome-book-row',
  templateUrl: './book-row.component.html',
  styleUrls: ['./book-row.component.scss']
})
export class BookRowComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
