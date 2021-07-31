import {user} from './user';
import {ActionType} from '../actions';
import {AuthorizationStatus} from '../../const';

describe('Reducer: user', () => {
  it('should returns the initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      });
  });

  it('should update auth authorization status to "AUTH', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requireAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it('should update auth authorization status to "NO_AUTH', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requireAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
  });
});
