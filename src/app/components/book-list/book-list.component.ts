import {
    Component, OnInit, Input, OnChanges, Output,
    EventEmitter
} from '@angular/core';
import {Book} from '../../models';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as bookAction from '../../store/actions/books';


@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['book-list.component.scss']

})
export class BookListComponent implements OnInit, OnChanges {
    @Input() books: Book[];
    @Input() label: string;
    @Output() select = new EventEmitter();

    constructor(private store: Store<fromRoot.State>) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
    }

    openPopup() {

    }

    addItem() {
        const book: Book = {
            id: 1984,
            name: '1984',
            author: 'Orwell',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51iq85zLtRL.jpg',
            // description: 'str'
        };
        this.store.dispatch(new bookAction.AddOne(book));
    }

}
