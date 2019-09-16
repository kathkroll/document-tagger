export const TAG_SELECTED_TEXT = 'TAG_SELECTED_TEXT';

export const addTagToSelectedText = (tagId) => {
  const selection = window.getSelection();
  return {
    type: TAG_SELECTED_TEXT,
    payload: {
      tagId,
      tagStart: selection.anchorOffset,
      tagEnd: selection.focusOffset,
    },
  };
};
