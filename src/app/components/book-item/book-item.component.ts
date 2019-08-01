import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html' })
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
