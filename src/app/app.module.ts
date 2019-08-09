import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {metaReducers, reducers} from './store/reducers';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import {SharedModule} from './shared/shared.module';
import {BookstoreModule} from './bookstore/bookstore.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {SearchModule} from './search/search.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BookstoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        FormsModule,
        HttpClientModule,
        SearchModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        SharedModule,
        RouterModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
