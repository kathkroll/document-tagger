import data from '../../mockData';
import selectTagsForActiveSelection from '../selectTagsForActiveSelection';

describe('select tags for active selection', () => {

  it('should return an empty list if a range is selected rather than a single point', () => {
    const tagsForActiveSelections = selectTagsForActiveSelection(3, 5, null, null);
    expect(tagsForActiveSelections.length).toBe(0);
  });

  it('should return a list with one item when one tag is applied to the index', () => {
    const selections = [{
      tagId: 3,
      start: 2,
      end: 8,
    }];
    const tagsForActiveSelections = selectTagsForActiveSelection(5, 5, selections, data.tagsReducer.tagTrees[0].tags);
    expect(tagsForActiveSelections.length).toBe(1);
    expect(tagsForActiveSelections[0].id).toBe(3);
  });
});