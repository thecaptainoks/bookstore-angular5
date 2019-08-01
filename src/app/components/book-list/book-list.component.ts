import {
  Component, OnInit, Input, OnChanges, Output,
  EventEmitter
} from '@angular/core';
import { Book } from '../../models';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit, OnChanges {
  @Input() books: Book[];
  @Input() label: string;
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }

  addItem() {
    console.log(11111);
  }

}
