import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorComponent} from './authors/author.component';
import {AuthorsService} from './authors/authors.service';

import { NgxJsonapiModule } from 'ngx-jsonapi';
import {BookComponent} from './book/book.component';


const routes: Routes = [
  {path: '', component: AuthorsComponent},
  {
    path: 'author/:id',
    component: AuthorComponent
  },
  {
    path: 'book/:id',
    component: BookComponent
  }
];

@NgModule({
  providers: [AuthorsService],
  imports: [RouterModule.forRoot(routes),
    NgxJsonapiModule.forRoot({
    url: '//jsonapiplayground.reyesoft.com/v2/'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
