import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Movie from '../components/Movie';

test('renders Movie component', () => {
  const movie = {
    id: 1,
    image: {
      medium: 'abc.jpg',
    },
    name: 'Movie Name',
    rating: {
      average: 7.5,
    },
  };

  const { container } = render(
    <Router>
      <Movie Movie={movie} />
    </Router>,
  );

  expect(container.innerHTML).toMatchSnapshot();
});
