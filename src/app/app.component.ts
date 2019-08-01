import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from './models';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as bookAction from './store/actions/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$: Observable<Book[]>;
  selected$: Observable<Book>;

  constructor(private store: Store<fromRoot.State>) {
    this.books$ = store.select(fromRoot.getAllBooks);
    this.selected$ = store.select(fromRoot.getSelectedBook);
  }

  onSelect(id: number) {
    this.store.dispatch(new bookAction.Select(id));
  }
}
