import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieDetails from '../components/MovieDetails';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  movies: {
    Movies: [
      {
        id: '1',
        name: 'Movie Name',
        rating: {
          average: 8.5,
        },
        category: ['Drama', 'Thriller'],
        summary: 'Summary of the show',
        image: {
          medium: 'abc.jpg',
        },
        official: 'https://official-website.com',
        language: 'English',
      },
    ],
  },
});

test('renders MovieDetail component', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <MovieDetails />
      </Router>
    </Provider>,
  );

  expect(container.innerHTML).toMatchSnapshot();
});
