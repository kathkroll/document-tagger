import React, { Component } from 'react';

import generateHighlightedSpans from '../utils/generateHighlightedSpans';
import TagSelectionDrawer from './TagSelectionDrawer';

export default class DocumentViewerComponent extends Component {

  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection() {
    const selection = window.getSelection();
    const start = selection.anchorOffset < selection.focusOffset ? selection.anchorOffset : selection.focusOffset;
    const end = selection.anchorOffset < selection.focusOffset ? selection.focusOffset : selection.anchorOffset;
    this.props.actions.updateSelectedDocumentText(start, end);
  }

  highlightText() {
    const spans = generateHighlightedSpans(this.props.taggedSelections, this.props.document.text);
    return (
      <div>
        {spans}
      </div>
    );
  }
  
  render() {
    return (
      <div className="document-container">
        <div className="overflow-container">
          <div className="document-text non-selectable">
            {this.highlightText()}
          </div>
          <div className="document-text" onMouseUp={this.handleSelection}>
            {this.props.document.text}
          </div>
        </div>
        <TagSelectionDrawer selectedTags={this.props.tagsAppliedToActiveSelection} />
      </div>
    );
  }
}