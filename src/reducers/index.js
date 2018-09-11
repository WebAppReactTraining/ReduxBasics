import { combineReducers } from 'redux';
import ActiveBook from './reducer_active_book';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
	books:BooksReducer,
	activeBook:ActiveBook
});

export default rootReducer;
