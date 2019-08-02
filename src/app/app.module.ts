import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {BookItemComponent} from './components/book-item/book-item.component';
import {BookListComponent} from './components/book-list/book-list.component';

import {metaReducers, reducers} from './store/reducers';
import {BookSelectedComponent} from './components/book-selected/book-selected.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import { PopupComponent } from './components/popup/popup.component';

export const MATERIAL_MODULES = [
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule
];

@NgModule({
    declarations: [
        AppComponent,
        BookItemComponent,
        BookListComponent,
        BookSelectedComponent,
        PopupComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ...MATERIAL_MODULES,
        StoreModule.forRoot(reducers, {metaReducers}),
    ],
    providers: [HttpService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
