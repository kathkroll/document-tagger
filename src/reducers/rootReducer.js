import { combineReducers } from 'redux';
import tagsReducer from './tagsReducer';
import documentsReducer from './documentsReducer';

export default combineReducers({
  tagsReducer,
  documentsReducer,
});