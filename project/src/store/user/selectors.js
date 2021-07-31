import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getRequiredAuthStatus = (state) => state[NameSpace.USER].isAuthChecked;
