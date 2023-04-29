import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const mockStore = configureMockStore([thunk]);

describe('missionsSlice', () => {
  it('should join a mission successfully', () => {
    const initialState = {
      missions: [
        {
          missionId: 1,
          missionName: 'Mission 1',
          description: 'Mission description',
          reserved: false,
        },
        {
          missionId: 2,
          missionName: 'Mission 2',
          description: 'Mission description',
          reserved: true,
        },
      ],
    };
    const store = mockStore({ missions: initialState });
    store.dispatch(joinMission(1));
    const expectedState = {
      missions: [
        {
          missionId: 1,
          missionName: 'Mission 1',
          description: 'Mission description',
          reserved: false,
        },
        {
          missionId: 2,
          missionName: 'Mission 2',
          description: 'Mission description',
          reserved: true,
        },
      ],
    };
    expect(store.getState().missions.missions).toEqual(expectedState.missions);
  });

  it('should leave a mission successfully', () => {
    const initialState = {
      missions: [
        {
          missionId: 1,
          missionName: 'Mission 1',
          description: 'Mission description',
          reserved: true,
        },
        {
          missionId: 1,
          missionName: 'Mission 1',
          description: 'Mission description',
          reserved: false,
        },
      ],
    };
    const store = mockStore({ missions: initialState });
    store.dispatch(leaveMission(1));
    const expectedState = {
      missions: [
        {
          missionId: 1,
          missionName: 'Mission 1',
          description: 'Mission description',
          reserved: true,
        },
        {
          missionId: 1,
          missionName: 'Mission 1',
          description: 'Mission description',
          reserved: false,
        },
      ],
    };
    expect(store.getState().missions.missions).toEqual(expectedState.missions);
  });
});
