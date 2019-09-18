import React, { Component } from 'react';

const TagSelectionDrawer = ({ selectedTags }) =>
  (
    <section className="drawer">
      {selectedTags.map(tag => {
        return (
          <div>{tag}</div>
        )
      })}
    </section>
  )

export default TagSelectionDrawer;