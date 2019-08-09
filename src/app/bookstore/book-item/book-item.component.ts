import {Component, OnInit, Input, EventEmitter, Output, HostBinding} from '@angular/core';
import {Book} from '../../models';
import * as bookAction from '../../store/actions/books';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['book-item.component.scss']
})
export class BookItemComponent implements OnInit {
    @Input() book: Book;

    constructor(private store: Store<fromRoot.State>) {
    }

    ngOnInit() {
    }

    removeItem() {
        this.store.dispatch(new bookAction.RemoveOne(this.book));
    }
}
