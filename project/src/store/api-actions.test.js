import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../api';
import {ActionType} from './actions';
import {checkAuth, login, logout, fetchPlaces, fetchPlace, postReview, fetchFavorites, setFavorite} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus, ReviewSendStatus} from '../const';

jest.mock('../adapter');

let api = null;

describe('Async actions', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to check auth', async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    await checkAuthLoader(dispatch, () => {}, api);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.LOAD_USER,
      payload: [{fake: true}],
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it('should make a correct API call to login', async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    await loginLoader(dispatch, () => {}, api);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.LOAD_USER,
      payload: [{fake: true}],
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: AppRoute.MAIN,
    });
  });

  it('should make a correct API call to logout', async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204);

    await logoutLoader(dispatch, () => {}, api);
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      type: ActionType.LOGOUT,
    });
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
  });

  it('should make a correct API call to get places', async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchPlacesLoader = fetchPlaces();

    apiMock
      .onGet(APIRoute.PLACES)
      .reply(200, [{fake: true}]);

    await fetchPlacesLoader(dispatch, () => {}, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.LOAD_PLACES,
      payload: [{fake: true}],
    });
  });

  it('should make a correct API call to get place', async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 42;
    const fetchPlaceLoader = fetchPlace(fakeId);

    apiMock
      .onGet(`${APIRoute.PLACES}/${fakeId}`)
      .reply(200, [{properties: true}]);

    apiMock
      .onGet(`${APIRoute.PLACES}/${fakeId}${APIRoute.NEARBY}`)
      .reply(200, [{nearby: true}]);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${fakeId}`)
      .reply(200, [{reviews: true}]);

    await fetchPlaceLoader(dispatch, () => {}, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.LOAD_PLACE,
      payload: {
        properties: [{properties: true}],
        nearby: [{nearby: true}],
        reviews: [{reviews: true}],
      },
    });
  });

  it('should make a correct API call to post review', async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 42;
    const fakeReview = {comment: 'test comment', rating: 4};
    const postReviewLoader = postReview(fakeId, fakeReview);

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${fakeId}`)
      .reply(200, [{fake: true}]);

    await postReviewLoader(dispatch, () => {}, api);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.CHANGE_REVIEW_POST_STATUS,
      payload: ReviewSendStatus.POSTING,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionType.LOAD_REVIEWS,
      payload: [{fake: true}],
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: ActionType.CHANGE_REVIEW_POST_STATUS,
      payload: ReviewSendStatus.SUCCESS,
    });
  });

  it('should make a correct API call to get favorites', async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoritesLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [{fake: true}]);

    await fetchFavoritesLoader(dispatch, () => {}, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.LOAD_FAVORITES,
      payload: [{fake: true}],
    });
  });

  it('should make a correct API call to set favorite', async () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 42;
    const fakeStatus = 1;
    const setFavoriteLoader = setFavorite(fakeId, fakeStatus);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${fakeId}/${fakeStatus}`)
      .reply(200, [{fake: true}]);

    await setFavoriteLoader(dispatch, () => {}, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.UPDATE_PLACE,
      payload: [{fake: true}],
    });
  });
});
