import {NameSpace} from '../root-reducer';

export const getUser = (state) => state[NameSpace.DATA].user;
export const getPlaces = (state) => state[NameSpace.DATA].places.list;
export const getLoadedPlacesStatus = (state) => state[NameSpace.DATA].places.isLoaded;
export const getPlace = (state) => state[NameSpace.DATA].place;
export const getFavoritesList = (state) => state[NameSpace.DATA].favorites.list;
export const getFavoritesLoadedStatus = (state) => state[NameSpace.DATA].favorites.isLoaded;
