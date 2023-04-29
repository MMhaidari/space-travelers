import rocketReducer, {
  reserveRocket,
  cancelReservation,
} from '../redux/rocket/rocketSlice';

describe('rocketSlice reducer', () => {
  it('should handle reserveRocket', () => {
    const rocketId = 1;
    const state = {
      rockets: [
        { id: 1, name: 'Falcon 9', reserved: false },
        { id: 2, name: 'Falcon Heavy', reserved: false },
      ],
      status: 'idle',
      erorr: null,
    };
    const expectedState = {
      rockets: [
        { id: 1, name: 'Falcon 9', reserved: true },
        { id: 2, name: 'Falcon Heavy', reserved: false },
      ],
      status: 'idle',
      erorr: null,
    };
    expect(rocketReducer(state, reserveRocket(rocketId))).toEqual(
      expectedState,
    );
  });

  it('should handle cancelReservation', () => {
    const rocketId = 1;
    const state = {
      rockets: [
        { id: 1, name: 'Falcon 9', reserved: true },
        { id: 2, name: 'Falcon Heavy', reserved: false },
      ],
      status: 'idle',
      erorr: null,
    };
    const expectedState = {
      rockets: [
        { id: 1, name: 'Falcon 9', reserved: false },
        { id: 2, name: 'Falcon Heavy', reserved: false },
      ],
      status: 'idle',
      erorr: null,
    };
    expect(rocketReducer(state, cancelReservation(rocketId))).toEqual(
      expectedState,
    );
  });
});
