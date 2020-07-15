import { Injectable } from '@angular/core';
import { Book } from './book-list/book.type';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  private _books: Book[] = [
    {
      "title": "Design Patterns",
      "subtitle": "Elements of Reusable Object-Oriented Software"
    },
    {
      "title": "REST und HTTP",
      "subtitle": "Entwicklung und Integration nach dem Architekturstil des Web",
    },
    {
      "title": "Eloquent JavaScript",
      "subtitle": "A Modern Introduction to Programming"
    }
  ];

  constructor(){}

  public getBooks(): Book[] {
    return this._books;
  }
}
