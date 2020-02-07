import {Injectable} from '@angular/core';
import {Author, AuthorsService} from '../authors/authors.service';
import {Autoregister, DocumentResource, Resource, Service} from 'ngx-jsonapi';

export class Book extends Resource {
  public attributes = {
    date_published: '',
    title: '',
    created_at: '',
    updated_at: ''
  };

  public relationships = {
    author: new DocumentResource<Author>()
  };
}


@Injectable()
export class BooksService extends Service<Book> {
  public resource = Book;
  public type = 'books';

  constructor() {
    super();
    this.register();
  }
}
