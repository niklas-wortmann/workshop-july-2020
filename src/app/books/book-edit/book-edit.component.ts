import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { exhaustMap, startWith, tap, take, debounceTime } from 'rxjs/operators';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'jan-is-awesome-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  public form: FormGroup;
  private onSubmitSub = new Subject<void>();

  constructor(private bookService: BookDataService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      subTitle: new FormControl(''),
    });
    this.bookService.getBooks().subscribe(console.log)

    this.onSubmitSub.asObservable().pipe(
      exhaustMap(_ => this.form.valueChanges.pipe(
          startWith(this.form.value),
          tap(value => this.bookService.addBook(value)),
          debounceTime(3000),
          take(1)
        )
      )
    ).subscribe();
  }

  onSubmit(): void {
    this.onSubmitSub.next();
  }
}
