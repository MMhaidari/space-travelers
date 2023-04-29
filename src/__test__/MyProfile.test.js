import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MyProfile from '../components/MyProfile';

const mockStore = configureMockStore([]);

describe('MyProfile', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Falcon 9',
            reserved: true,
          },
        ],
      },
      missions: {
        missions: [
          {
            missionId: 'mission-1',
            missionName: 'Moon Landing',
            reserved: true,
          },
        ],
      },
    });
  });

  it("should render 'No Missions Reserved' when no missions are reserved", () => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Falcon 9',
            reserved: true,
          },
        ],
      },
      missions: {
        missions: [],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const noMissionsText = getByText('No Missions Reserved');
    expect(noMissionsText).toBeInTheDocument();
  });

  it("should render 'No Rockets Reserved' when no rockets are reserved", () => {
    store = mockStore({
      rockets: {
        rockets: [],
      },
      missions: {
        missions: [
          {
            missionId: 'mission-1',
            missionName: 'Moon Landing',
            reserved: true,
          },
        ],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const noRocketsText = getByText('No Rockets Reserved');
    expect(noRocketsText).toBeInTheDocument();
  });

  it('should render the reserved missions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const missionName = getByText('Moon Landing');
    expect(missionName).toBeInTheDocument();
  });

  it('should render the reserved rockets', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const rocketName = getByText('Falcon 9');
    expect(rocketName).toBeInTheDocument();
  });
});
