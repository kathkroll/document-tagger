import React from 'react';
import PropTypes from 'prop-types';

import TagListSelector from './TagListSelector';

const TagTreeComponent = ({ tagTrees }) =>
  (
    <section className="main">
      <TagListSelector tagTrees={tagTrees} />
    </section>
  )

TagTreeComponent.propTypes = {
  tagTrees: PropTypes.array,
}

export default TagTreeComponent;