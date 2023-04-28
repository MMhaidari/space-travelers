import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Mission from '../components/Mission';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Mission component', () => {
  const mission = {
    missionId: 'mission_1',
    missionName: 'Thaicom',
    description: 'mission description',
    reserved: true,
  };

  test('renders when mission is reserved', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Mission
            mission={mission}
            handleReserveClick={() => {}}
            onCancelClick={() => {}}
          />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly when mission is not reserved', () => {
    const newMission = { ...mission, reserved: false };
    const tree = renderer
      .create(
        <Provider store={store}>
          <Mission
            mission={newMission}
            handleReserveClick={() => {}}
            onCancelClick={() => {}}
          />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
