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

  highlightText() {
    const { taggedSelections, document } = this.props;
    const spanElements = [];
    if(taggedSelections.length >= 1) {
      let tempLine = '';
      let lastIndexAdded = 0;
      taggedSelections.forEach((selection, index) => {
        if(lastIndexAdded < selection.start) {
          const nonHighlightedLine = document.text.substring(lastIndexAdded, selection.start);
          spanElements.push(<span>{nonHighlightedLine}</span>);
          lastIndexAdded = selection.start;
        }
        tempLine = tempLine.concat(document.text.substring(lastIndexAdded, selection.end));
        lastIndexAdded = selection.end;
        if(index === taggedSelections.length - 1 || taggedSelections[index+1].start > lastIndexAdded) {
          spanElements.push(<span className="highlighted">{tempLine}</span>);
          tempLine = '';
      }
      });
      if(taggedSelections[taggedSelections.length-1].end != document.text.length) {
        const lastSpanContent = document.text.substring(taggedSelections[taggedSelections.length-1].end);
        spanElements.push(<span>{lastSpanContent}</span>);
      }
    } else {
      const fullString = document.text;
      spanElements.push(<span>{fullString}</span>);
    }
    console.log(spanElements);
    return (
      <div>
        {spanElements}
      </div>
    )
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