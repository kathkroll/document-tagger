import React, { Component } from 'react';

export default class TagListSelector extends Component {
  
  render() {
    const { tagTrees } = this.props;

    const tagTreeList = tagTrees.map(function(tree) {
      return (
        <div key={tree.id}>{tree.name}</div>
      );
    });

    return (
      <div>
        {tagTreeList}
      </div>
    );
  }
}