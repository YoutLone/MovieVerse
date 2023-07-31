import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
/* eslint-disable */
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('Home', () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      movies: {
        categories: ['Drama', 'Comedy', 'Action'],
        Movies: [
          {
            id: 1,
            name: 'Movie 1',
            image: { medium: 'abc.jpg' },
            category: ['Drama'],
            rating: { average: 8.2 }, // Add the rating property for testing
          },
          {
            id: 2,
            name: 'Movie 2',
            image: { medium: 'abc.jpg' },
            category: ['Comedy'],
            rating: { average: 7.5 }, // Add the rating property for testing
          },
          {
            id: 3,
            name: 'Movie 3',
            image: { medium: 'abc.jpg' },
            category: ['Action'],
            rating: { average: 9.0 }, // Add the rating property for testing
          },
        ],
      },
    };

    store = mockStore(initialState);
  });

  it('renders movies based on selected category', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    // Initial rendering should show all movies
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
    expect(screen.getByText('Movie 3')).toBeInTheDocument();

    // Select Comedy category
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Comedy' } });

    // Only Movie 2 should be visible
    expect(screen.queryByText('Movie 1')).not.toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
    expect(screen.queryByText('Movie 3')).not.toBeInTheDocument();
  });
});
