import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-book-selected',
  templateUrl: './book-selected.component.html',
  styles: [`
  mat-card {
    margin-top: 10px;
    width: 700px;
  }
  `]
})
export class BookSelectedComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
