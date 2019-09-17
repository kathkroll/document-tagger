import React, { Component } from 'react';

export default class DocumentViewerComponent extends Component {

  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection() {
    const selection = window.getSelection();
    this.props.actions.updateSelectedDocumentText(selection.anchorOffset, selection.focusOffset);
  }
  
  render() {
    const { document } = this.props;

    return (
      <div className="document-container">
        <div className="document-text" onMouseUp={this.handleSelection}>
          {document.text}
        </div>
      </div>
    );
  }
}