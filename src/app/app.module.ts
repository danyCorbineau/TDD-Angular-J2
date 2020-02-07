import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './authors/author.component';
import { BookComponent } from './book/book.component';
import {BooksService} from './book/books.service';
import {AuthorsService} from './authors/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
