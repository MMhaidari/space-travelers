import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MissionsPage from '../routes/MissionsPage';

const mockStore = configureMockStore();

describe('RocketList component', () => {
  it('should render Missions list when status is succeeded', async () => {
    const mockMissions = [
      {
        missionId: 'mission-1',
        missionName: 'mission 1',
        description: 'First mission',
        reserved: false,
      },
      {
        missionId: 'mission-2',
        missionName: 'mission 2',
        description: 'second mission',
        reserved: false,
      },
      {
        missionId: 'mission-3',
        missionName: 'mission 3',
        description: 'third mission',
        reserved: false,
      },
    ];

    const store = mockStore({
      missions: {
        missions: mockMissions,
        status: 'succeeded',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('mission 1')).toBeInTheDocument();
      expect(screen.getByText('mission 2')).toBeInTheDocument();
      expect(screen.getByText('mission 3')).toBeInTheDocument();
    });
  });
});
