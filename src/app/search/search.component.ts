import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import {FormControl} from '@angular/forms';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchStr: FormControl;

    constructor(private store: Store<fromRoot.State>) {
    }

    ngOnInit() {
        this.searchStr = new FormControl();
    }

    search() {
        // const name = this.searchStr.value;
        const myInput = document.querySelector('input');
        const observable = fromEvent(myInput, 'input');
        observable.pipe(switchMap((e: KeyboardEvent) => {
            return fetch(`https://api.github.com/search/repositories?q=${(e.target as HTMLInputElement).value}`);
                // return this.store.dispatch(new bookAction.SearchBook(name));
            }
        )).subscribe(resp => console.log(resp));
        // this.store.dispatch(new bookAction.SearchBook(name));
    }

}
