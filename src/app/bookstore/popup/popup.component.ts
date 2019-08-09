import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../../models';
import * as bookAction from '../../store/actions/books';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import {FormControl, FormGroup} from '@angular/forms';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

    newBook: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<PopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private store: Store<fromRoot.State>) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.newBook = new FormGroup({
            bookName: new FormControl(),
            author: new FormControl(),
            img: new FormControl(),
            description: new FormControl()
        });
    }

    addItem() {
        const book: Book = {
            id: (new Date()).getTime(),
            name: this.newBook.value.bookName,
            author: this.newBook.value.author,
            img: this.newBook.value.img,
            description: this.newBook.value.description
        };
        if (this.newBook.value.bookName) {
            this.store.dispatch(new bookAction.AddOne(book));
            this.onNoClick();
        } else {
            return this.newBook.invalid;
        }

    }

}
