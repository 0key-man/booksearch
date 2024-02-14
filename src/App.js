import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchComponent from './components/SearchComponent';
import FilterComponent from './components/FilterComponent';
import BookCardComponent from './components/BookCardComponent';
import PaginationComponent from './components/PaginationComponent';
import LoadingComponent from './components/LoadingComponent';
import ErrorComponent from './components/ErrorComponent';

const App = () => {
  return (
      <Provider store={store}>
        <div>
          <h1>Book Search</h1>
          <SearchComponent />
          <FilterComponent />
          <ErrorComponent />
          <LoadingComponent />
          <div>
            {/* Здесь будет выводиться массив книжных карточек */}
            {/* Пример: */}
            {/* <BookCardComponent book={book} key={book.id} /> */}
          </div>
          <PaginationComponent />
        </div>
      </Provider>
  );
};

export default App;
