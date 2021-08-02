import {ui} from './ui';
import {ActionType} from '../actions';
import {defaultCity, ReviewSendStatus, SortType} from '../../const';

describe('Reducer: ui', () => {
  it('should returns the initial state', () => {
    expect(ui(undefined, {}))
      .toEqual({
        city: defaultCity,
        sortType: SortType.DEFAULT,
      });
  });

  it('should update city by change city', () => {
    const state = {
      city: 'Old city',
    };

    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'City',
    };

    expect(ui(state, changeCityAction))
      .toEqual({
        city: 'City',
      });
  });

  it('should update sort type by change sort', () => {
    const state = {
      sortType: 'Old sort type',
    };

    const changeSortAction = {
      type: ActionType.CHANGE_SORT,
      payload: 'Sort type',
    };

    expect(ui(state, changeSortAction))
      .toEqual({
        sortType: 'Sort type',
      });
  });
});
