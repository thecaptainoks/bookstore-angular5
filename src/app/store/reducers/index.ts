import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as fromBooks from './books';

export interface State {
    books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
    books: fromBooks.reducer
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getBookState = createFeatureSelector<fromBooks.State>('books');

export const getIds = createSelector(
    getBookState,
    fromBooks.getIds,
);

export const getBooks = createSelector(
    getBookState,
    fromBooks.getBooks,
);

export const getSelected = createSelector(
    getBookState,
    fromBooks.getSelected,
);

export const getSelectedBook = createSelector(
    getSelected,
    getBooks,
    (selectedId, Books) => {
        return {
            ...Books[selectedId]
        };
    }
);

export const getAllBooks = createSelector(
    getIds,
    getBooks,
    (ids, books) => {
        return ids.map(id => books[id]);
    }
);
