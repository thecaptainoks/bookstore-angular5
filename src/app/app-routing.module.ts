import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookstoreComponent} from './bookstore/bookstore.component';
import {SearchComponent} from './search/search.component';

const appRoutes: Routes = [
  { path: 'books', component: BookstoreComponent},
  { path: 'search', component: SearchComponent},
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    declarations: []
})
export class AppRoutingModule {
}
