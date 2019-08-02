import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from './models';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as bookAction from './store/actions/books';
import {HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books$: Observable<Book[]>;
  selected$: Observable<Book>;

  constructor(private store: Store<fromRoot.State>,
              private httpService: HttpService) {
    this.books$ = store.select(fromRoot.getAllBooks);
    this.selected$ = store.select(fromRoot.getSelectedBook);
  }

  onSelect(id: number) {
    this.store.dispatch(new bookAction.Select(id));
  }
  ngOnInit() {
    this.httpService.getData().subscribe(data => this.books$ = data['books']);
  debugger
  }
}
