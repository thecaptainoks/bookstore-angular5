import { Action } from '@ngrx/store';
import { Book } from '../../models';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

export const GET_ALL = '[Books] Get All';
export const SELECT = '[Books] Select';
export const ADD_ONE = '[Books] Add One';

export class GetAll implements Action {
  readonly type = GET_ALL;

  constructor(public payload: Observable<Book[]>) { }
}

export class Select implements Action {
    readonly type = SELECT;

    constructor(public payload: number) { }
}

export class AddOne implements Action {
    readonly type = ADD_ONE;

    constructor(public payload: Book) { }
}

export type Action = GetAll | AddOne | Select;


