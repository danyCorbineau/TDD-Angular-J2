import { Component, OnInit } from '@angular/core';
import {Book, BooksService} from "./books.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  public book: Book;
  public isDataLoaded: boolean;
  public constructor(private http: HttpClient, private booksService: BooksService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.isDataLoaded = false;
    const bookId = this.activatedRoute.snapshot.params['id'];
    this.booksService
      .get(bookId).subscribe(book => {
      this.book = book;
    }, null, () => {
      this.isDataLoaded = true;
    });
  }

}
