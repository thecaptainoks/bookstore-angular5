import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {BookItemComponent} from './book-item/book-item.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookSelectedComponent} from './book-selected/book-selected.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from '../services/http.service';
import {PopupComponent} from './popup/popup.component';
import {SharedModule} from '../shared/shared.module';
import {BookstoreComponent} from './bookstore.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        BookstoreComponent,
        BookItemComponent,
        BookListComponent,
        BookSelectedComponent,
        PopupComponent,
        BookstoreComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        RouterModule
    ],
    providers: [HttpService],
    bootstrap: [BookstoreComponent],
    exports: [
        BookstoreComponent
    ],
    entryComponents: [PopupComponent]
})
export class BookstoreModule {
}
