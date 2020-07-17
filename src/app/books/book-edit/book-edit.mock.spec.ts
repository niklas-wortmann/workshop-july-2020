import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { BookDataService } from '../book-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Book } from '../book-list/book.type';

export class BookDataServiceMock {
    addBook(book: Book) {
        
    }
}


fdescribe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let service: BookDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditComponent ],
      providers: [
        {provide: BookDataService, useClass: BookDataServiceMock}
      ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    service = TestBed.get(BookDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a book on submit', fakeAsync(() => {
      spyOn(service, "addBook");
    component.form.patchValue({title: '123', subtitle: '456'});

    component.onSubmit();
    tick(3000);
    
    expect(service.addBook).toHaveBeenCalledTimes(1);
    expect(service.addBook).toHaveBeenCalledWith({title: '123', subtitle: '456'})
  }))
});
