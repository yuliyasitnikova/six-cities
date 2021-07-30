import {combineReducers} from 'redux';
import {user} from './user/user';
import {data} from './data/data';
import {ui} from './ui/ui';

export const NameSpace = {
  USER: 'USER',
  DATA: 'DATA',
  UI: 'UI',
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA]: data,
  [NameSpace.UI]: ui,
});
