import React, { Component } from 'react';

const TagSelectionDrawer = ({ selectedTags, remove }) =>
  (
    <section className="drawer">
      <div className="tags-container">
        {selectedTags.map(tag => {
          return (
            <span
              key={tag.id}
              className="tag-chip"
            >{tag.name}
              <span className="remove-btn" onClick={() => remove(tag.id)}>🞩</span>
            </span>
          );
        })}
      </div>
    </section>
  )

export default TagSelectionDrawer;