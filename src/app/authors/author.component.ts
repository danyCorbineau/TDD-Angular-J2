import {Component, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {AuthorsService, Author} from './authors.service';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.sass']
})

export class AuthorComponent implements OnInit {
  public author: Author;
  public isDataLoaded: boolean;

  public constructor(private http: HttpClient, private authorsService: AuthorsService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {
    this.isDataLoaded = false;
    let authorId = this.activatedRoute.snapshot.params['id'];
    this.authorsService
      .get(authorId, { include: ['books']}).subscribe(author => {
      this.author = author;
    }, null, () => {
      this.isDataLoaded = true;
    });
    // this.http.get<Author>('http://jsonapiplayground.reyesoft.com/v2/authors/' + authorId + '?include=books').subscribe((data: Author) => {
    //   this.author = data;
    //   this.isDataLoaded = true;
    // });
  }
}
