import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RocketPage from '../routes/RocketPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

jest.mock('../components/RenderRockets', () => {
  const RenderRockets = () => (
    <div data-testid="render-rockets">Render Rockets</div>
  );
  return RenderRockets;
});

describe('RocketPage', () => {
  it('should render the "RenderRockets" component', () => {
    useSelector.mockReturnValueOnce({ rockets: [], status: 'idle' });
    const { getByTestId } = render(<RocketPage />);
    expect(getByTestId('render-rockets')).toBeInTheDocument();
  });
});
