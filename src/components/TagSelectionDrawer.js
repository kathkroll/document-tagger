import React, { Component } from 'react';

const TagSelectionDrawer = ({ selectedTags }) =>
  (
    <section className="drawer">
      {selectedTags.map(tag => {
        return (
          <div key={tag.id}>{tag.name}</div>
        )
      })}
    </section>
  )

export default TagSelectionDrawer;