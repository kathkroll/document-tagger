export const TAG_SELECTED_TEXT = 'TAG_SELECTED_TEXT';
export const UPDATE_SELECTED_DOCUMENT_TEXT = 'UPDATE_SELECTED_DOCUMENT_TEXT';

export const addTagToSelectedText = (tagId) => {
  return {
    type: TAG_SELECTED_TEXT,
    payload: {
      tagId,
    },
  };
};

export const updateSelectedDocumentText = (selectionStartIndex, selectionEndIndex) => {
  if (selectionStartIndex !== selectionEndIndex) {
    return {
      type: UPDATE_SELECTED_DOCUMENT_TEXT,
      payload: {
        selectionStartIndex,
        selectionEndIndex,
      }
    }
  }
}
