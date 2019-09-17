import data from '../mockData';
import { 
  UPDATE_SELECTED_DOCUMENT_TEXT,
  TAG_SELECTED_TEXT,
} from '../actions';

export default (state = data.documentsReducer, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_DOCUMENT_TEXT:
      return handleUpdateSelectedDocumentText(state, action);
    case TAG_SELECTED_TEXT:
      return handleTagSelectedText(state, action);
    default:
      return state;
  }
}

const handleUpdateSelectedDocumentText = (state, action) => {
  return {
    ...state,
    selection: {
      start: action.payload.selectionStartIndex,
      end: action.payload.selectionEndIndex,
    }
  }
}

const handleTagSelectedText = (state, action) => {
  const newTaggedSelection = {
    start: state.selection.start,
    end: state.selection.end,
    tagId: action.payload.tagId,
  }
  const earlierSelectionsIndex = state.taggedSelections.filter(s => (s.start < newTaggedSelection.start) || (s.start === newTaggedSelection.start && s.end <= newTaggedSelection.end)).length;
  return {
    ...state,
    selection: {
      start: null,
      end: null,
    },
    taggedSelections: [ 
      ...state.taggedSelections.slice(0, earlierSelectionsIndex),
      newTaggedSelection,
      ...state.taggedSelections.slice(earlierSelectionsIndex),
    ]
  }
}