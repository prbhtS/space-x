import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { FilterCard } from './components/filter-card';

test('renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/spacex launch programs/i);
  expect(linkElement).toBeInTheDocument();
});

test('test if filter rendered', () => {
  const filterTestData = {
    years: ['2020', '2019', '2018', '2017', '2016']
  };

  render(<FilterCard years={filterTestData.years}></FilterCard>)

  expect(screen.queryByText('2012')).toBeNull()
  expect(screen.getByText('2020')).toBeInTheDocument()
  expect(screen.getByText('2019')).toBeInTheDocument()
  expect(screen.getByText('2018')).toBeInTheDocument()
  expect(screen.getByText('2017')).toBeInTheDocument()
  expect(screen.getByText('2016')).toBeInTheDocument()
  
})