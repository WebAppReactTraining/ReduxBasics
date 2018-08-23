import React, { Component } from 'react';
import Booklist from '../containers/books-list.js';
import BookDetail from '../containers/book-detail.js';

export default class App extends Component {
  render() {
    return (
      <div>
      <Booklist/>
      <BookDetail/>
      </div>
    );
  }
}
