import React, { Component } from 'react';

export default class TagHierarchy extends Component {
  constructor(props) {
    super(props);
    this.dispatchAddTag = this.dispatchAddTag.bind(this);
  }

  dispatchAddTag(tagId) {
    const props = this.props;
    return function (e) {
      props.onAddTag(tagId);
    }
  }
  
  render() {
    const { tags, onAddTag } = this.props;

    const tagTree = tags.map((tag) => {
      return (
        <div key={tag.id} onClick={this.dispatchAddTag(tag.id)}>{tag.name}</div>
      );
    });

    return (
      <div>
        {tagTree}
      </div>
    );
  }
}