import React, { Component } from 'react';

export default class TagListSelector extends Component {
  
  render() {
    const { tagTrees } = this.props;

    const tagTreeList = tagTrees.map(function(tree) {
      return (
        <div className="tag-tree-selector" key={tree.id}>{tree.name}</div>
      );
    });

    return (
      <div className="tag-tree-selector-container">
        {tagTreeList}
      </div>
    );
  }
}