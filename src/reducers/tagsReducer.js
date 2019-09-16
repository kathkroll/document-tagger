import data from '../mockData';
import { TAG_SELECTED_TEXT } from '../actions';

export default (state = data.tagsReducer, action) => {
  switch (action.type) {
    case TAG_SELECTED_TEXT: 
      return handleAddTagToSelectedText(state, action)
    default:
      return state
  }
}

const handleAddTagToSelectedText = (state, action) => {
  console.log(action);
  return state;
}