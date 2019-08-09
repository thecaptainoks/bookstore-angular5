import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Book} from '../models/';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import * as bookAction from '../store/actions/books';
import {HttpService} from '../services/http.service';
import {PopupComponent} from './popup/popup.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-bookstore',
    templateUrl: './bookstore.component.html',
    styleUrls: ['./bookstore.component.scss']
})
export class BookstoreComponent implements OnInit {
    books$: Observable<Book[]>;
    selected$: Observable<Book>;

    constructor(private store: Store<fromRoot.State>,
                private httpService: HttpService,
                public dialog: MatDialog) {
        this.books$ = store.select(fromRoot.getAllBooks);
        this.selected$ = store.select(fromRoot.getSelectedBook);
    }

    onSelect(id: number) {
        this.store.dispatch(new bookAction.Select(id));
    }

    ngOnInit() {
        this.httpService.getData().subscribe(data => {
            this.store.dispatch(new bookAction.SetAll(data['books']));
        });

    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupComponent, {
            width: '250px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
