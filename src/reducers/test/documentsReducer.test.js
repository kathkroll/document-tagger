import data from '../../mockData';
import documentsReducer from '../documentsReducer';
import {
  TAG_SELECTED_TEXT,
} from '../../actions';

describe('documents reducer', () => {
  describe('tag selected text', () => {
    it('should insert a new selection', () => {
      const defaultState = data.documentsReducer;
      const stateWithUsersSelection = {
        ...defaultState,
        selection: {
          start: 3,
          end: 10,
        }
      };
      const addSelectionAction = {
        type: TAG_SELECTED_TEXT,
        payload: {
          tagId: 1,
        }
      }
      const newState = documentsReducer(stateWithUsersSelection, addSelectionAction);
      expect(newState.taggedSelections.length).toBe(1);
    });

    it('should insert the second selection at end if start index is greater than first selection', () => {
      const defaultState = data.documentsReducer;
      const stateWithUsersSelection = {
        ...defaultState,
        selection: {
          start: 3,
          end: 10,
        }
      };
      const addSelectionAction = {
        type: TAG_SELECTED_TEXT,
        payload: {
          tagId: 1,
        }
      }
      const stateAfterFirstAdd = documentsReducer(stateWithUsersSelection, addSelectionAction);
      const stateWithUpdatedUsersSelection = {
        ...stateAfterFirstAdd,
        selection: {
          start: 14,
          end: 29,
        }
      };
      const stateAfterSecondAdd = documentsReducer(stateWithUpdatedUsersSelection, addSelectionAction);
      expect(stateAfterSecondAdd.taggedSelections.length).toBe(2);
      expect(stateAfterSecondAdd.taggedSelections[1].start).toBe(14);
      expect(stateAfterSecondAdd.taggedSelections[1].end).toBe(29);
    });

    it('should order entries with same start index by end index', () => {
      const defaultState = data.documentsReducer;
      const stateWithUsersSelectionAndFirstSelectionEntry = {
        ...defaultState,
        selection: {
          start: 3,
          end: 10,
        },
        taggedSelections: [
          {
            tagId: 1,
            start: 3,
            end: 15,
          }
        ]
      };
      const addSelectionAction = {
        type: TAG_SELECTED_TEXT,
        payload: {
          tagId: 1,
        }
      };
      const newState = documentsReducer(stateWithUsersSelectionAndFirstSelectionEntry, addSelectionAction);
      expect(newState.taggedSelections.length).toBe(2);
      expect(newState.taggedSelections[0].start).toBe(3);
      expect(newState.taggedSelections[0].end).toBe(10);
    });

     it('should insert a third selection in sorted order', () => {
      const defaultState = data.documentsReducer;
      const stateWithUsersSelectionAndFirstSelectionEntry = {
        ...defaultState,
        selection: {
          start: 17,
          end: 21,
        },
        taggedSelections: [
          {
            tagId: 1,
            start: 3,
            end: 15,
          },
          {
            tagId: 2,
            start: 27,
            end: 35,
          }
        ]
      };
      const addSelectionAction = {
        type: TAG_SELECTED_TEXT,
        payload: {
          tagId: 1,
        }
      };
      const newState = documentsReducer(stateWithUsersSelectionAndFirstSelectionEntry, addSelectionAction);
      expect(newState.taggedSelections.length).toBe(3);
      expect(newState.taggedSelections[1].start).toBe(17);
      expect(newState.taggedSelections[1].end).toBe(21);
    });
  });
});