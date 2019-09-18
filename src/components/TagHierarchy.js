import React, { Component } from 'react';
import classNames from 'classnames';

export default class TagHierarchy extends Component {
  constructor(props) {
    super(props);
    this.dispatchAddTag = this.dispatchAddTag.bind(this);
  }

  isActiveTag(tagId) {
    return this.props.activeSelectedTags.filter(tag => tag.id === tagId).length >= 1;
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
        <div 
          key={tag.id} 
          onClick={this.dispatchAddTag(tag.id)}
          className="tag-option"   
        >
          <span>
            <span className={classNames({'highlighted': this.isActiveTag(tag.id)})}>
              {tag.name}
            </span>
            {tag.totalSelections > 0 && <span className="counter">{tag.totalSelections}</span>}
          </span>
        </div>
      );
    });

    return (
      <div className="tag-tree">
        {tagTree}
      </div>
    );
  }
}