import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-book-selected',
  templateUrl: './book-selected.component.html',
  styleUrls: ['book-selected.component.scss']
})
export class BookSelectedComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
