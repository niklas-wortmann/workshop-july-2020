import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { BookDataService } from '../book-data.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';


fdescribe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;

  let bookDataServiceMock: jasmine.SpyObj<BookDataService>;

  beforeEach(async(() => {
    bookDataServiceMock = jasmine.createSpyObj<BookDataService>(['addBook']);
    TestBed.configureTestingModule({
      declarations: [ BookEditComponent ],
      providers: [
        {provide: BookDataService, useValue: bookDataServiceMock}
      ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a book on submit', fakeAsync(() => {
    component.form.patchValue({title: '123', subtitle: '456'});

    component.onSubmit();
    tick(3000);
    
    expect(bookDataServiceMock.addBook).toHaveBeenCalledTimes(1);
    expect(bookDataServiceMock.addBook).toHaveBeenCalledWith({title: '123', subtitle: '456'})
  }))
});
