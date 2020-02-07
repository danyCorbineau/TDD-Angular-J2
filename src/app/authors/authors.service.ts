import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';
import {Book, BooksService} from '../book/books.service';


export class Author extends Resource {
    public attributes = {
        name: 'default name',
        date_of_birth: ''
    };

    public relationships = {
      books: new DocumentCollection<Book>()
     };
}

@Injectable()
export class AuthorsService extends Service<Author> {
  constructor() {
    super();
    new BooksService();
    this.register();
  }
    public resource = Author;
    public type = 'authors';
}
