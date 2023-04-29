import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/Navbar';
import '@testing-library/jest-dom';

jest.mock('react-bootstrap/esm/Navbar', () => 'MockedBootstrapNavbar');
describe('NavBar', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
  });

  it('renders a logo', () => {
    const logo = screen.getByAltText('header logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.png');
  });

  it('renders a link to the Rockets page', () => {
    const rocketsLink = screen.getByText('Rockets');
    expect(rocketsLink).toBeInTheDocument();
    expect(rocketsLink).toHaveAttribute('href', '/');
  });

  it('renders a link to the Missions page', () => {
    const missionsLink = screen.getByText('Mission');
    expect(missionsLink).toBeInTheDocument();
    expect(missionsLink).toHaveAttribute('href', '/missionpage');
  });

  it('renders a link to the My Profile page', () => {
    const profileLink = screen.getByText('MyProfile');
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute('href', '/profilepage');
  });
  it('Navbar snapshots match', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
