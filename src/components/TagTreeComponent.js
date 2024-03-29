import React from 'react';
import PropTypes from 'prop-types';

import TagListSelector from './TagListSelector';
import TagHierarchy from './TagHierarchy';

const TagTreeComponent = ({ tagTrees, activeTagList, tagsAppliedToActiveSelection, actions }) =>
  (
    <section className="tag-container">
      <TagListSelector tagTrees={tagTrees} />
      {/* TODO update functionality to display tags of active tree */}
      <TagHierarchy
        tags={activeTagList}
        onAddTag={actions.addTagToSelectedText}
        activeSelectedTags={tagsAppliedToActiveSelection}
      />
    </section>
  )

TagTreeComponent.propTypes = {
  tagTrees: PropTypes.array,
}

export default TagTreeComponent;