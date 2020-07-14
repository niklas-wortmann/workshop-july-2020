import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jan-is-awesome-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public book = 'Chemie des Todes';

  @Output() bookSelect = new EventEmitter<string>(); 

  constructor() {  }

  ngOnInit(): void {
    this.bookSelect.emit(this.book); 

    setTimeout(() => {
      this.book = 'Kalte Asche';
      this.bookSelect.emit(this.book);
    }, 3000);

  }

}
