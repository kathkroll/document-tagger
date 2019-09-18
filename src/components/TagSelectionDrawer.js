import React, { Component } from 'react';

const TagSelectionDrawer = ({ selectedTags, remove }) =>
  (
    <section className="drawer">
      {selectedTags.map(tag => {
        return (
          <div key={tag.id}>{tag.name}<span onClick={() => remove(tag.id)}>X</span></div>
        )
      })}
    </section>
  )

export default TagSelectionDrawer;