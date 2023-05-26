import React from 'react';
import { render, screen } from '@testing-library/react';
import AppComponent from './components/app-component';
import {ClientTagService} from "./components/_services/ClientTagService";
import {Unit} from "./components/_unit/unit";

test('renders learn react link', () => {
  render(<AppComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


