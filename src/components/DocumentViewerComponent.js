import React, { Component } from 'react';

import generateHighlightedSpans from '../utils/generateHighlightedSpans';

export default class DocumentViewerComponent extends Component {

  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection() {
    const selection = window.getSelection();
    this.props.actions.updateSelectedDocumentText(selection.anchorOffset, selection.focusOffset);
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
        <div className="document-text non-selectable">
          {this.highlightText()}
        </div>
        <div className="document-text" onMouseUp={this.handleSelection}>
          {this.props.document.text}
        </div>
      </div>
    );
  }
}