import { Action } from '@ngrx/store';
import * as bookAction from '../actions/books';

import { Book } from '../../models';


export interface State {
  ids: number[];
  books: { [id: number]: Book };
  selected: number;
}

export const initialState: State = {
  ids: [1, 2, 3],
  books: {
    1: {
      id: 1, name: 'Player Piano',
      description: `Vonnegut’s vision of an America restructured by industrial
      technocrats whose robotics in the workplace result in a devaluing of human participation.`,
      author: 'K. Vonnegut',
      img: 'http://www.publishersweekly.com/images/data/ARTICLE_LISTICLE_ITEM/override_image/000/000/860-1.JPG'
    },
    2: {
      id: 2, name: 'The Sirens of Titan',
      // tslint:disable-next-line:max-line-length
      description: `The premise of the novel is that all of human history has been one big Rube Goldberg invention by the Tralfamadorians for the single purpose of getting a spare part to their stranded but intrepid intergalactic messenger, Salo`,
      author: 'K. Vonnegut',
      img: 'http://www.publishersweekly.com/images/data/ARTICLE_LISTICLE_ITEM/override_image/000/000/861-1.JPG'
    },
    3: {
      id: 3, name: 'Mother Night',
      description: `The closest Vonnegut gets to “Nazi monkey business” until letting go in Slaughterhouse-Five. `,
      author: 'K. Vonnegut',
      img: 'http://www.publishersweekly.com/images/data/ARTICLE_LISTICLE_ITEM/override_image/000/000/862-1.JPG'
    },
  },
  selected: null,
};

export function reducer(state = initialState, action: bookAction.Action) {
  switch (action.type) {
    case bookAction.ADD_ONE: {
      const newBook: Book = action.payload;

      return {
        ...state,
        ids: [...state.ids, newBook.id],
        books: { ...state.books, newBook }
      };
    }


    case bookAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getBooks = (state: State) => state.books;
export const getSelected = (state: State) => state.selected;

